import { useEffect, useState } from "react";
import "./App.css";
import * as configcat from "configcat-js";
import amplitude from "amplitude-js";

function App() {
  const [flagValue, setFlagValue] = useState("");
  const [variationID, setVariationID] = useState("");

  // handle click event
  const handleClick = () => {
    // send click event to amplitude
    amplitude.getInstance().logEvent("Buy Now Clicked");
  };

  useEffect(() => {
    // initialize ConfigCat client
    const configCatClient = configcat.createClient(
      "fK7ZCApWbkaDu14njPKZQw/s9XWupU5K0KRp_9PvkU02g"
    );

    // initialize Amplitude client
    const amplitudeInstance = amplitude
      .getInstance()
      .init("b7be4afb11b7945664f096cf2321e38f");

    // Mimic unique user for this demo
    const userID = "User123";
    const userObject = { identifier: userID };

    // Send user ID to amplitude
    amplitude.getInstance(amplitudeInstance).setUserId(userID);

    // Get status of feature flag
    configCatClient.getValue(
      "salesflag",
      false,
      (value) => setFlagValue(value),
      userObject
    );

    // Get unique variation ID from ConfigCat
    configCatClient.getVariationId(
      "salesflag",
      false,
      (id) => setVariationID(id),
      userObject
    );

    // identify variation ID and send it to amplitude as part of the user property
    let identifyVariant = new amplitude.Identify().set(
      "Variation ID",
      variationID
    );
    amplitude.getInstance().identify(identifyVariant);
  }, [variationID, flagValue]);

  return (
    <div className='App App-header'>
      <h2>Hello World!</h2>
      {flagValue && <button onClick={handleClick}>Buy Now (blue)</button>}

      {!flagValue && <button onClick={handleClick}>Buy Now (red)</button>}

      <p>Variation ID: {variationID}</p>
    </div>
  );
}

export default App;

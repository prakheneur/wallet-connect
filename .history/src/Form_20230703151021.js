import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [contractModule, setContractModule] = useState("");
  const [contractMethod, setContractMethod] = useState("");
  const [durationMs, setDurationMs] = useState("");

  const handleContractAddressChange = (e) => {
    setContractAddress(e.target.value);
  };

  const handleContractModuleChange = (e) => {
    setContractModule(e.target.value);
  };

  const handleContractMethodChange = (e) => {
    setContractMethod(e.target.value);
  };

  const handleDurationMsChange = (e) => {
    setDurationMs(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Contract Address: ${contractAddress}`);
    console.log(`Contract Module: ${contractModule}`);
    console.log(`Contract Method: ${contractMethod}`);
    console.log(`Duration (ms): ${durationMs}`);

    // Perform your logic here using the contractAddress, contractModule, contractMethod, and durationMs values
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={contractAddress}
        onChange={handleContractAddressChange}
        placeholder="Enter contract address"
        className="input-field"
      />

      <input
        type="text"
        value={contractModule}
        onChange={handleContractModuleChange}
        placeholder="Enter contract module"
        className="input-field"
      />

      <input
        type="text"
        value={contractMethod}
        onChange={handleContractMethodChange}
        placeholder="Enter contract method"
        className="input-field"
      />

      <input
        type="text"
        value={durationMs}
        onChange={handleDurationMsChange}
        placeholder="Enter duration in milliseconds"
        className="input-field"
      />

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;

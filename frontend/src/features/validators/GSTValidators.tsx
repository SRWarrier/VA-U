const validateGST = (_, value) => {
    const gstPattern = new RegExp(`^[0-9]{2}${validatePan}[A-Z0-9]{3}$`);
    const gstPan = value.slice(2, 11); // Extract the PAN from the GST number

    if (!value || !gstPattern.test(value)) {
      return Promise.reject("Please enter a valid GST number");
    }

    if (gstPan !== validatePan) {
      return Promise.reject("The PAN in the GST number does not match");
    }

    return Promise.resolve();
  };


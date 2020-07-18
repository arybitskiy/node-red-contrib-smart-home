import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/honeywell/39348-ZW4008.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3599/",
            id: "3135",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "39348 / ZW4008",
            id: "3135",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to add a device to the Z-Wave network.\n2. Once the controller is ready to add your device, press and release the top or bottom of the wireless smart switch (rocker) to add it in the network.\n\nIf prompted by the controller to enter the S2 security code, refer to the QR code/security number on the back of the box, or the QR code label on the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Quickly press ON (top) button 3 times, then, immediately press the OFF (bottom) button 3 times. The LED will flash ON/OFF 5 times when completed successfully.\nNote: This should only be used in the event your network’s primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to remove a device from the Z-Wave network.\n2. Once the controller is ready to remove your device, press and release the top or bottom of the wireless smart switch (rocker) to remove it from the network.",
            name: "ExclusionDescription",
          },
          { text: "In-Wall Smart Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3135",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text:
              "In-Wall Smart Switch with QuickFit and SimpleWire enhancements. Revolutionary QuickFit design features a housing depth that is up to 20 percent smaller than the previous Z-Wave models. This reduced size coupled with the elimination of heat taps provides a better fit in older style boxes and multi-gang configurations. SimpleWire technology allows line and load to automatically be configured with auto-sensing line-load terminals. All of this is coupled with Z-Wave S2 and Smart Start allows for effortless installation while being safer than ever!",
            name: "Description",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3599/39348%20Binder.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/Products/3599/xml",
                author: "Jeff Sanicola - jeff.sanicola@outlook.com",
                date: "01 Jan 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "3",
            label: "LED Indication Configuration",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
              { label: "LED always on", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "Alternate Exclusion",
            max: "1",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "0 (default) - Press any button on the device \n1 - Press 2 times ON button and then 2 times OFF button, LED will flash 5 times if done successful",
            Item: [
              { label: "Any button", value: "0" },
              { label: "2x ON button, 2x OFF button", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic - Load", max_associations: "5" },
              {
                index: "3",
                label: "Basic - Double Tap",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

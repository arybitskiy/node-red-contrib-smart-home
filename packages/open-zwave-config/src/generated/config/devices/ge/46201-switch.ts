import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3135:4952",
            name: "OzwInfoPage",
          },
          { text: "images/ge/46201-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3317/",
            id: "3135",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to exclude your device, press and release the top button of the wireless smart switch (rocker) to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text: "14291/46201/ZW4008",
            id: "3135",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "In-Wall Smart Switch with QuickFit and SimpleWire enhancements. Revolutionary QuickFit design features a housing depth that is up to 20 percent smaller than the previous Z-Wave models. This reduced size coupled with the elimination of heat taps provides a better fit in older style boxes and multi-gang configurations. SimpleWire technology allows line and load to automatically be configured with auto-sensing line-load terminals. All of this is coupled with Z-Wave S2 and Smart Start allows for effortless installation while being safer than ever!",
            name: "Description",
          },
          {
            text:
              "1. Quickly press ON (Top) button 3 times then immediately press the OFF (Bottom) button 3 times. The LED will flash ON/OFF 5 times when completed successfully. \n2. Please use this reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3135",
            name: "FrequencyName",
            type: "4952",
          },
          { text: "In-Wall Smart Switch", name: "Name" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3317/46201%20Binder.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press and release the top or bottom of the wireless smart switch(rocker) to include it in the network.\n3. Once your controller has confirmed that the device has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3317/xml",
                author: "Caleb Mingle - caleb@mingle.cm",
                date: "07 Sept 2019",
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
            label: "LED Light",
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
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Default - normal exclusion\n        Active - perform a series of button presses to help eliminate accidental exclusion",
            Item: [
              { label: "Press any button", value: "0" },
              { label: "Press two times ON, two times OFF", value: "1" },
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
              {
                index: "2",
                label: "Basic - Local Load",
                max_associations: "5",
              },
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

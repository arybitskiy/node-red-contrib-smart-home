import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/honeywell/39348-ZW4005.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2689/",
            id: "3036",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "39348 / ZW4005",
            id: "3036",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network.\n2. Once the controller is ready to include your device, press and release the top or bottom of the wireless smart switch(rocker) to include it in the network.\n3. Once your controller has confirmed that the device has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
          {
            text:
              "Quickly press ON (Top) button 3 times then immediately press the OFF (Bottom) button 3 times. The LED will flash ON/OFF 5 times when completed successfully. \nNote: Please use this reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to exclude your device, press and release the top button of the wireless smart switch (rocker) to exclude it from the network.",
            name: "ExclusionDescription",
          },
          { text: "In-Wall Smart Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3036",
            name: "FrequencyName",
            type: "4952",
          },
          { name: "Description" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2689/39348-HQSG_v1.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/Products/2689/XML",
                author: "Dinko Bajric - dbajric@gmail.com",
                date: "22 March 2020",
                revision: 1,
              },
              {
                text: "Correct Product Pic Entry",
                author: "Justin Hammond",
                date: "24 June 2020",
                revision: 2,
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
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets when the LED on the switch is lit.",
            Item: [
              { label: "LED on when light off", value: "0" },
              { label: "LED on when light on", value: "1" },
              { label: "LED always off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
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

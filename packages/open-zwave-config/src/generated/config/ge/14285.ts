import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3032:4F44",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14285.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2939/",
            id: "3032",
            name: "ZWProductPage",
            type: "4F44",
          },
          {
            text:
              "1.  Place the device into ON mode (upper position of Operating Mode Switch)\n2.  Press and hold the programming button.\n3.  While holding programming button, place device into OFF mode (middle position of Operating Mode Switch).\n4.  While holding programming button, place device back into ON mode (upper position of Operating Mode Switch).\n5.  After three (3) seconds, release programming button.  Green LED will flash 3 times when completed successfully.\n\nNote: This should only be used in the event your networks primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "14285/ZW4007",
            id: "3032",
            name: "Identifier",
            type: "4F44",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2939/14285%20QSG.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Transform any home into a smart home with the GE 40 Amp Z-Wave Direct-Wire Indoor/Outdoor Smart Switch. When added to a Z-Wave network, the heavy duty switch enables wireless control of on/off functions for large load, hard-wired applications such as waters heaters, landscape lighting, spas, pool pumps and heaters. The Smart Switch can be used indoors or outdoors and features an easy access wire connection block, front mounted LED lights indicating power and on/off status, and an override switch to turn connected devices on or off manually. The Smart Switch is housed in a lockable, tamper-resistant case to ensure settings and wiring are secure. The rugged, weather-resistant design will keep out dirt and debris while being suitable for use in extreme weather conditions. The GE Z-Wave Direct-Wire Outdoor Smart Switch is also equipped with state-of-the-art energy monitoring capability, allowing you to monitor watts and kilowatt hours, helping you keep your energy costs to a minimum. Take control of your home lighting and large load devices with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          { text: "Direct-Wire Outdoor Smart Switch", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3032",
            name: "FrequencyName",
            type: "4F44",
          },
          {
            text:
              "1.  Follow the instructions for your Z-Wave certified controller to add a device to the Z-Wave network.\n2.  Once the controller is ready to add your device, press and release the programming button to add it to the network.  If prompted by the controller to enter the S2 security code, refer to the QR code/security number on the back of the box, or the QR code label on the product.\n3.  Once your controller has confirmed that the device has been added, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.  Follow the instructions for your Z-Wave certified controller to remove a device from the Z-Wave network.\n2.  Once the controller is ready to remove your device press and release the programming button to remove it from the network.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2939/xml",
                author: "John Klimek - jklimek@gmail.com",
                date: "8 June 2020",
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
            instance: "1",
            index: "1",
            value: "0",
            label: "Product State after Power Reset",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help: "Product State after Power Reset",
            Item: [
              { value: "0", label: "Return to last state" },
              { value: "1", label: "Return to off" },
              { value: "2", label: "Return to on" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "2",
            value: "0",
            label: "Energy Report Mode",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            type: "list",
            Help: "Energy Report Mode",
            Item: [
              { value: "0", label: "Once monthly" },
              { value: "1", label: "Reports based on Parameter 3 setting" },
              { value: "2", label: "Once daily" },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "3",
            value: "5",
            label: "Energy Report Frequency",
            units: "",
            size: "1",
            min: "5",
            max: "60",
            type: "byte",
            Help: "Energy Report Frequency",
          },
          {
            genre: "config",
            instance: "1",
            index: "19",
            value: "0",
            label: "Alternate Exclusion",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help: "Alternate Exclusion",
            Item: [
              { value: "0", label: "Default" },
              { value: "1", label: "Alternate Exclusion (3 button presses)" },
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
                label: "Basic Set, controlled by local load",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Basic Set, controlled by pressing the On or Off button",
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

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0505:2005",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zm1601eu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1009/",
            id: "0505",
            name: "ZWProductPage",
            type: "2005",
          },
          { text: "Siren with LED strobe light", name: "Name" },
          { text: "ZM1601EU-5", id: "0505", name: "Identifier", type: "2005" },
          {
            text:
              "All user and network settings will be cleared and the device reset to factory defaults when the device is excluded.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0505",
            name: "FrequencyName",
            type: "2005",
          },
          { text: "It is FLiRS device", name: "WakeupDescription" },
          {
            text:
              "For “Inclusion” (adding to) a network, put the Z-Wave™ network controller into “inclusion” mode, and following its instruction to add the ZM 1601 to your controller.  To get the ZM 1601 in the “inclusion” mode, open the bracket and press the program switch of ZM 1601 for 1 second at least & release to be included.  After waiting a few seconds the LED Setting Lighting should go off, if not, please try again. (After sending the Z-Wave NIF one time if the ZM1601 is not included it will send 4 times Network Wide Inclusion request every 4 ~ 6 seconds for auto inclusion. The orange LED will flash again if the siren has not been included or the orange LED will go off after inclusion.)",
            name: "InclusionDescription",
          },
          {
            text:
              "For “Exclusion” from (removing from) a network: Set up the Z-Wave™ network controller into “exclusion” mode, and following its instruction to delete the ZM 1601 from your controller. Press the program switch of ZM 1601 for 1 second at least & release to be excluded. Note: a. LED setting light will flash (orange color) continuously in Exclusion condition for 25 seconds. b. All user and network settings will be cleared and the device reset to factory defaults when the device is excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "This product will sound a loud siren and flash a strobe light when an alarm message or alert is received on any Z-Wave™ enabled network.  This siren is a Z-Wave™ enabled device (interoperable, two-way RF mesh networking technology) and is fully compatible with any Z-Wave™ enabled network. Configuration modes are provided to select; Strobe, Siren or Both and to set Alarm Auto Stop time.  Features also include Self-Protection (tamper proof) alert and Battery Life Alert.  105dB siren at 1 meter.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1009/ZM 1601 Siren_20140407-500 series.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1009/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
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
            index: "0",
            label: "Siren Strobe Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the reaction of the siren: turn either Siren sound, Strobe light, or both when triggered",
            Item: [
              { label: "Strobe and Siren", value: "0" },
              { label: "Siren Only", value: "1" },
              { label: "Strobe Only", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "1",
            label: "Alarm Auto Stop",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the auto time out of the alarm indication",
            Item: [
              { label: "30 seconds", value: "0" },
              { label: "60 seconds", value: "1" },
              { label: "120 seconds", value: "2" },
              { label: "Will Not Automatically Stop", value: "3" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "37", Compatibility: [{ SetAsReport: [true] }] },
      { id: "128", Compatibility: [{ SetAsReport: [true] }] },
    ],
  },
};

export default config;

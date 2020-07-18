import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0101",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sp103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/873/",
            id: "0001",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0101",
          },
          { text: "SP103", id: "0001", name: "Identifier", type: "0101" },
          {
            text:
              "The Motion Detector is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks. This Motion Detector is  controllable to our modules, such as On/Off Module AN135 and Lamp Module AD130. Inclusion of this Motion Detector on other manufacturer’s Wireless Controller menu allows remote turn-on of connected modules and their connected lighting when the Detector is triggered. Z-Wave nodes in the system also act as repeaters if they support that function.",
            name: "Description",
          },
          { text: "Motion Sensor", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/873/xml",
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
            index: "1",
            label: "ON Phase Level",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tPhase Level of ON Command\n\t\t\t\tThe Configuration parameter that can be used to adjust the phase level of ON command is transmitted is Configuration Parameter # 1.\n\t\t\t\tThis parameter can be configured with the value of 0 through 127.\n\t\t\t\tValue 0: Set Device OFF(0x00)\n\t\t\t\tValue 1-99: Set Device On (1-99)\n\t\t\t\tValue 100-127: Set Device On to the last phase (0xFF)\n\t\t\t\tNote: 0xFF means the device will be on to the last phase before the device was turned off.\n\t\t\t\tInformation reproduced from: http://www.techstyleuk.co.uk/index_files/sp103_manual.pdf\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Power Saving",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tEnabling/Disabling Power Saving Function (for testing)\n\t\t\t\tWhen no movement has been detected for 10 seconds, the SP103 will enter the power saving mode.\n\t\t\t\tIt can be disabled or enabled power saving function by setting Configuration Parameter # 3.\n\t\t\t\tThis parameter can be configured with the value of 0 through 127, where 0 means power saving being enabled and others mean power saving being disabled.\n\t\t\t\tPS : As long as the batteries have been refitted, the Detector will enable the power saving function automatically.\n\t\t\t\tInformation reproduced from: http://www.techstyleuk.co.uk/index_files/sp103_manual.pdf\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { action: "add", id: "113" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Motion", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

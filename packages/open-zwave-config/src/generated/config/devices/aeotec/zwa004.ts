import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0004:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa004.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2811/",
            id: "0004",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "Included  device:\n1.   Insert the LIR2450 battery.\n2.   Set the Z-Wave network main controller into learning mode( see Z-Wave network controller operating manual).\n3.   Pressing and holding the button for 3 seconds.\n4.   If the inclusion is successful, the LED will blink in green less than for 5 seconds and then keep on for 15 seconds.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0004",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text:
              "To remove the NanoMote One from the Z-Wave network:\n(1) Insert the LIR2450 battery.\n(2) Set the Z-Wave network main controller into remove mode\n(see Z-Wave controller operating manual).\n(3) Triple click the button, if the exclusion is successful, LED\nwill blink in orange for less than 5 seconds and then keep on\nfor 3 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Pressing and holding the button for 20 seconds. Release the button after 20 seconds, LED will keep in yellow for 3 seconds. Scene Controller will be reset to factory defaults if you short press the button within this 3 seconds.\nUsing this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "NanoMote One", name: "Name" },
          {
            text:
              "Pressing and holding Button for 3 seconds. Led will turn to green,\nwhich means Scene Controller has been woken up.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2816/NanoMote One USER MANUAL .pdf",
            name: "ProductManual",
          },
          { text: "ZWA004-A", id: "0004", name: "Identifier", type: "0102" },
          {
            text:
              "The NanoMote One is a wireless, portable and rechargeable scene switch. It can control a Z-Wave device, such as smart plug, smart dimmer with a Z-Wave gateway. You can also activate a scene like sleep scene, movie scene and entertainment scene with it.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/2816/",
            id: "0004",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "ZWA004-C", id: "0004", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2811/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2816/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
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
            index: "32",
            label: "Low battery level",
            max: "50",
            min: "10",
            type: "byte",
            units: "%",
            value: "20",
            Help:
              "\n\t\t\t\tSet the low battery value.\n\t\t\t\tRange: 10% - 50%.\n\t\t\t",
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Central scene notification",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable send central scene notification",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Duration of the command switch multilevel",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n\t\t\t\tSetting the duration value of the command switch multilevel.\n\t\t\t\tAvailable settings: 0-255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Battery low buzzer alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/disable the buzzer alarm when battery is running low",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off control", max_associations: "5" },
              { index: "3", label: "Dimmer control", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

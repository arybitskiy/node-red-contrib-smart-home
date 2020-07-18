import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0002:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2880/",
            id: "0002",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Reset the Device.\n1.\tAssuming led bulb was added to controller and was power on.\n2.\tRGBW bulb re-power 6 times (between 0.5-2 seconds each time).\nNote: ON -> OFF -> ON -> OFF -> ON -> OFF -> ON -> OFF -> ON -> OFF -> ON -> OFF -> ON \n3.\tIf the 6th power on, the led bulb change to Yellow color(into pairing process ), which means that the reset factory settings are successf.\n\nUsing this action in case of the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "✓ Standard form factor and appearance of the light bulb with 800 lm output\n✓ RGBW: dimmable from 5% to 100%, tunable from 1800K to 6500K, and 16 million colors\n✓ Possible to be included in groups, scenes, or schedules\n✓ Suitable for indoor lighting: Corridors, Bedroom, Living Room, etc.",
            name: "Description",
          },
          {
            text:
              "Add for inclusion \n1.\tEnsure the led bulb has been excluded outside the network.\n2.\tTriggered by OFF ->ON (between 0.5-2 seconds each time)\n3.\tLED solid yellow Color (0xFFFF00) during the pairing(Timeout is 10 seconds).\n\n\tFailure:\nBlinks between 100% White and Red 0x0000FF color for 3 seconds (at a rate of 200ms per flash), Once 3 seconds have passed, the LED should return to a Warm White LED at 100%\n\tSuccess:\nBlinks between 100% White and Green 0x00FF00 color for 3 seconds (at a rate of 200ms per flash). Once 3 seconds have passed, the LED should return to a Warm White LED at 100%.",
            name: "InclusionDescription",
          },
          { text: "LED Bulb 6:Multi-Colour", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2881/AA LED Bulb 6 说明书（RGBW-AL001）_转曲-2dd.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Remove for exclusion \n1.\tAssuming led bulb was added to controller.\n2.\tTriggered by OFF -> ON -> OFF -> ON -> OFF -> ON (between 0.5-2 seconds each time).\n3.\tLED Solid Purple/Violet Color (0xEE82EE) during the unpairing process. (Timeout is 10 seconds).\n\tFailure:\nBlinks between 100% White and Red 0x0000FF color for 3 seconds (at a rate of 200ms per flash), Once 3 seconds have passed, the LED should return to the last color ( memory status(color cc set)) of LED Bulb.\n\tSuccess:\nBlinks between 100% White and Blue 0x0000FF color for 3 seconds (at a rate of 200ms per flash). Once 3 seconds have passed, the LED should return to a Warm White LED at 100%.",
            name: "ExclusionDescription",
          },
          { text: "ZWA002-A", id: "0002", name: "Identifier", type: "0103" },
          {
            text: "https://products.z-wavealliance.org/products/2881/",
            id: "0002",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZWA002-C", id: "0002", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2880/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2881/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text: "Add Verified Change Flag to Color CC",
                author: "Justin Hammond",
                date: "02 July 2020",
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
            label: "User custom mode LED animations",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "User custom mode for LED animations",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Blink Colors in order mode", value: "1" },
              { label: "Randomized blink color mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Strobe over Custom Color",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/Disable Strobe over Custom Color.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Set the rate of change to next color in Custom Mode",
            max: "8640000",
            min: "5",
            type: "int",
            units: "ms",
            value: "50",
            Help:
              "\n                Set the rate of change to next color in Custom Mode.\n            ",
          },
          {
            genre: "config",
            index: "4",
            label: "Set color that LED Bulb blinks",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n                Set color that LED Bulb blinks in Blink Mode.\n            ",
          },
          {
            genre: "config",
            index: "16",
            label: "Ramp rate when dimming using Multilevel Switch",
            max: "100",
            min: "0",
            type: "byte",
            units: "100ms",
            value: "20",
            Help:
              "\n                Specifying the ramp rate when dimming using Multilevel Switch V1 CC in 100ms.\n            ",
          },
          {
            genre: "config",
            index: "80",
            label: "Notification",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable to send notifications to associated devices (Group 1) when the state of LED Bulb is changed.",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Basic CC report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Warm White temperature",
            max: "4999",
            min: "2700",
            size: "2",
            type: "short",
            units: "k",
            value: "2700",
            Help:
              "\n\t\t\t\tAdjusting the color temperature in warm white color component.\n\t\t\t\tavailable value: 2700k to 4999k",
          },
          {
            genre: "config",
            index: "82",
            label: "cold white temperature",
            max: "6500",
            min: "5000",
            size: "2",
            type: "short",
            units: "k",
            value: "6500",
            Help:
              "\n\t\t\t\tAdjusting the color temperature in cold white color component.\n\t\t\t\tavailable value:5000k to 6500k\n\t\t\t",
          },
        ],
      },
      {
        id: "51",
        Compatibility: [{ VerifyChanged: [{ text: "true", index: "0" }] }],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;

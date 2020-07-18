import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0038:0104",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw056.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1307/",
            id: "0038",
            name: "ZWProductPage",
            type: "0104",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "Doorbell Gen5", name: "Name" },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text:
              "Aeon Labs Doorbell supports playing MP3 music files with a press of this doorbell. It has a 128MB flash memory that can store up to 800 ringtones. The volume can be adjusted manually via short press on the Volume Button, also you can switch the doorbell sound to the next via long press on the Volume Button. You may change/update your doorbell ringtone at any point in time you want by connecting your Doorbell to your PC to update the sound track on your Doorbell’s flash memory.\nThere is a small Wireless Button, which can trigger the doorbell on the other side of the wall to play the selected doorbell music when pressed.\nIt also act as a repeater that forward Z-Wave command messages to destination nodes if the originating controller is out of range from the destination node.\nBy taking advantage of the Z-Wave mesh network, commands can be routed to their destination via intermediary “listening” Z-Wave products. Products that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.\nAlso a tool that can be programmed, scheduled, controlled and communicated with from anywhere in the world.",
            name: "Description",
          },
          { text: "ZW056-A", id: "0038", name: "Identifier", type: "0104" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0038",
            name: "FrequencyName",
            type: "0104",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1583/Aeon Labs Doorbell Gen5 manual.pdf",
            name: "ProductManual",
          },
          {
            text: "https://products.z-wavealliance.org/products/1581/",
            id: "0038",
            name: "ZWProductPage",
            type: "0204",
          },
          { text: "ZW056-B", id: "0038", name: "Identifier", type: "0204" },
          {
            text: "Australia / New Zealand",
            id: "0038",
            name: "FrequencyName",
            type: "0204",
          },
          {
            text: "https://products.z-wavealliance.org/products/1583/",
            id: "0038",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "ZW056-C", id: "0038", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe)",
            id: "0038",
            name: "FrequencyName",
            type: "0004",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1307/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1581/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1583/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 5,
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
            index: "2",
            label: "doorbell ringtone repetitions",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "\n                Set the repetitions for playing doorbell ringtone.\n                Value=1 to 255, the range of repetition is 1 to 100.\n                Note: If the time of playing doorbell ringtone is more than 20s,\n                the volume of ringtone will reduce to silence no matter how\n                many repetitions of doorbell ringtone are set.\n            ",
          },
          {
            genre: "config",
            index: "5",
            label: "Default Doorbell Ringtone",
            max: "100",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n                Set the default doorbell ringtone.\n                Value=1-100, Specify the ringtone as default.\n            ",
          },
          {
            genre: "user",
            index: "6",
            label: "Play Ringtone",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n                Select a ringtone to play.\n                Value=0, stop playing.\n                Value=1-100, play the specified ringtone.\n                Value=255, play the default ringtone.\n                Value=other, ignore.\n            ",
          },
          {
            genre: "user",
            index: "7",
            label: "Control",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Playback Control",
            Item: [
              { label: "Play", value: "1" },
              { label: "Stop", value: "2" },
              { label: "Pause", value: "3" },
              { label: "Next", value: "4" },
              { label: "Previous", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Volume",
            max: "10",
            min: "0",
            type: "byte",
            units: "",
            value: "10",
            Help: "Set the volume of ringtone",
          },
          {
            genre: "config",
            index: "10",
            label: "Swap Buttons",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              '\n                Define functions of "Button -" and "Button+".\n                Button - is previous, Button+ is next.\n            ',
            Item: [
              { label: "Standard", value: "0" },
              { label: "Reversed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Button Short/Long Press Function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              '\n                Define functions of "Button -" and "Button+" when short\n                pressing and long pressing it.\n            ',
            Item: [
              {
                label: "Short Press - Volume, Long Press - RingTone",
                value: "0",
              },
              {
                label: "Short Press - RingTone, Long Press - Volume",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Wireless Button Status",
            read_only: "true",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Get Wireless Button Battery Status",
            Item: [
              { label: "Normal Battery Level", value: "0" },
              { label: "Low Battery Level", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "Defines the automated status notification of an associated device when status changes",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Low Battery Notification status",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Defines the automated status notification of an associated device when the wireless button battery level changes",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Configuration Paramater 42", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "241",
            label: "Pair Wireless Button",
            size: "4",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n                Pair the Wireless Button with Doorbell.\n                Value=0x55555555, Start the Wireless Button pairing mode and\n                the blue Led will blink slowly, short press the Wireless Button\n                once, if the blue Led change to be solid, which means the pairing\n                is successful. Otherwise, repeat the steps.\n                It will automatically exit the pairing mode after 8s if there is no\n                pressing action of the Wireless Button.\n                Note:\n                You can send this configuration Get CC to ask the pairing result:\n                If configuration report value=0x00000000, which means the\n                pairing is failed.\n                If configuration report value =0xFFFFFFFF, which means the\n                pairing is successful.\n            ",
            Item: [
              { label: "Start Pairing/Paired", value: "0xFFFFFFFF" },
              { label: "Not Pairing/Unpaired", value: "0" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Configuration Locked",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/disable Configuration Locked",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Transmit", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

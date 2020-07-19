import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0200:0007",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/TagReader500.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2478/",
            id: "0200",
            name: "ZWProductPage",
            type: "0007",
          },
          { text: "Tag Reader 500 US", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2478/Quickstart_Technical Manual_Tag_Reader500_US_v_0_12.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The Tag Reader 500 US has an option to reset it self to factory settings. Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n\nTo reset to factory settings please follow these steps:\n1.\tPress the enter button for 2 seconds, release the enter button to start the remove routine (indication LED will blink 3 times every second).\n2.\tDuring the remove routine press enter button 4 times within 1,5 seconds to reset the product.\n3.\tIf ‘back to factory settings’ was successful the indication LED will go in for 1 full second on the end of the remove routine. \n4.\tA DEVICE_RESET_LOCALLY_NOTIFICATION is sent to the nodes associated in the lifeline group.",
            name: "ResetDescription",
          },
          {
            text:
              "To include the Tag Reader 500 US press and hold the enter button for two seconds (indication LED blinks shortly). Release the enter button now to start the inclusion (during the inclusion routine the indication LED willblink twice per second).",
            name: "InclusionDescription",
          },
          {
            text:
              "To exclude the Tag Reader 500 US press and hold the enter button for two seconds (indication LED blinks shortly). Release the enter button now to start the exclusion (during the exclusion routine the indication LED willblink twice three times per 1,5 second).",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold the button fpr 7 seconds, the indication LED will go on for 1 full second.",
            name: "WakeupDescription",
          },
          {
            text:
              "A Z-Wave security enabled entry control device. You can arm/disarm your house to home or away with the Tag Reader 500. With the use of a RFID tag or a numerical code the device can send an entry control message which can be handled by a supported gateway. In addition the Tag Reader supports the activation of scenes.",
            name: "Description",
          },
          { text: "80820702", id: "0200", name: "Identifier", type: "0007" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0200",
            name: "FrequencyName",
            type: "0007",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1979/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2478/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "1",
            instance: "1",
            label: "Set to Default",
            size: "1",
            type: "list",
            value: "170",
            Help: "To configure the always awake mode.",
            Item: [
              { label: "Normal", value: "170" },
              { label: "Set all parameters to default", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Feedback Time",
            type: "byte",
            units: "seconds",
            value: "15",
            Help:
              "To configure the time the beep is automatically turned off in seconds.\n                0x00: Disable, 0x01 - 0xFE: Value in seconds\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Feedback Timeout",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n                To configure the timeout to wait for a WAKEUP_NO_MORE_INFORMATION before the error beep\n                is automatically sound. The error beeps are fixed 8 beeps shortly after each other.\n                0x00: Disabled, 0x01 - 0xFF: Value in seconds\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Feedback beeps per second",
            type: "byte",
            value: "2",
            Help:
              "\n                To configure the number of beeps per second. Every beep is fixed about 10ms.\n                0x00 - 0xFF: Number of beeps per second\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Always awake mode",
            size: "1",
            type: "list",
            value: "1",
            Help: "To configure the always awake mode.",
            Item: [
              { label: "Normal operating", value: "1" },
              { label: "Always awake", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Operation mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The mode that the Tag Reader 500 communicates with the associated gateway.",
            Item: [
              { label: "Gateway mode", value: "0" },
              { label: "Local mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Gateway confirmation",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                In gateway mode it is possible to let the gateway decide if the Tag Reader 500 can arm to home or away.\n                If gateway indication is disabled the Tag Reader 500 automatically assumes that it can arm and will wait\n                for a user input of RFID TAG or numeric code.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

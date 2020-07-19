import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:0012:0300",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-ms02-200.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2578/",
            id: "0012",
            name: "ZWProductPage",
            type: "0300",
          },
          {
            text:
              "1)Power on the device,\n2) Press and hold the Z button for more than 20 seconds,\n3) If holding time more than 20seconds, the LED indicator will keep on for 2 seconds, which means resetting is complete.\n4) The reset feature works only when the device has been included into a Z-Wave network.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Motion sensor can be included and operated in any Z-Wave network with other Z-Wave certified devices. \n\nThe features list:\n1)\tZ-Wave Plus certified for wide compatibility (500 serials product).\n2)\tSupports security 0 and security 2 protected mode with AES-128 encryption.\n3)\tMotion sensor.\n4)\tTamper alarm by shock sensor.\n5)\tThe battery life is up to 1 year.\n6)\tLow battery alarm.\n7)\tSupport firmware OTA.",
            name: "Description",
          },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller in add mode (see the controller’s manual).\n4) Click the Z-button once or triple click the Z-button quickly, the LED indicator should blink fast. \n5) Wait for the adding process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0012",
            name: "FrequencyName",
            type: "0300",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2578/HKZW-MS02-ProductManual.pdf",
            name: "ProductManual",
          },
          { text: "HKZW-MS02", id: "0012", name: "Identifier", type: "0300" },
          { text: "Motion Sensor", name: "Name" },
          {
            text:
              "Press and hold the Z button for more than 5 seconds and release.",
            name: "WakeupDescription",
          },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller remove mode (see the controller’s manual).\n4) Triple click the Z-button quickly, the LED indicator should blink fast.\n5) Wait for the removing process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Improvements based on the HKZW-M02-200 entry",
                author: "Geert van Horrik - geert@catenalogic.com",
                date: "08 Aug 2019",
                revision: 2,
              },
              {
                text:
                  "Adjust description and units of configuration parameter 18 as per user manual",
                author: "Gert van Dijk - gertvdijk@gmail.com",
                date: "10 January 2020",
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
            index: "12",
            instance: "1",
            label: "Motion sensor's sensitivity",
            max: "8",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "8",
            Help:
              "\n                Level 1 to 8. The higher the value, the more sensitive the PIR sensor.\n                0 Disabled.\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Enable/disable basic set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/disable basic set command",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Value of the basic set",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Send basic set value = 255 to nodes associated with group 2 when motion alarm is triggered. Send basic set value = 0 to nodes associated with group 2 when motion alarm is canceled.\n                Send basic set value = 0 to nodes associated with group 2 when motion alarm is triggered. Send basic set value = 255 to nodes associated with group 2 when motion alarm is canceled.",
            Item: [
              { label: "Basic On", value: "0" },
              { label: "Basic Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Enable/disable shock alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "when the value is 0, the product will not sends a vibration alarm after moving or shaking; when the value is 1, the product will sends a vibration alarm after moving or shaking",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Motion alarm cancellation delay",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "30",
            Help:
              "The number of seconds to delay the alarm cancellation after motion has not been detected any longer.",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Level of low battery",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            units: "%",
            value: "20",
            Help: "The low level from 10% to 50%",
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
              { index: "2", label: "Basic set command", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:000F:0200",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-fld01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2641/",
            id: "000F",
            name: "ZWProductPage",
            type: "0200",
          },
          {
            text:
              "Flood Sensor is capable of both detecting leaks and floods and when the level of water gets too low in pool or tank, Flood Sensor can work with your z-wave network to prevent emergencies such as burst water boiler to leaking air conditioners. With Z-Wave, the scope to save money is endless.\n\nThe features list:\n1)\tZ-Wave Plus certified for wide compatibility (500 serials product).\n2)\tSecurity 0 and security 2 framework implemented with AES-128 encryption.\n3)\tContains an extension water detecting probe. \n4)\tTemperature measurement.\n5)\tVibration sensor.\n6)\tThe battery life is up to 1 year. \n7)\tLow battery alert",
            name: "Description",
          },
          {
            text:
              "1)Power on the device,\n2) Press and hold the Z button for more than 20 seconds,\n3) If holding time more than 20seconds, the LED indicator will keep on for 2 seconds, which means resetting is complete.\n4) The reset feature works only when the device has been included into a Z-Wave network.\n\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Press and hold the Z button for more than 5 seconds and release.",
            name: "WakeupDescription",
          },
          { text: "Flood Sensor", name: "Name" },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller remove mode (see the controller’s manual).\n4) Triple click the Z-button quickly, the LED indicator should blink fast.\n5) Wait for the removing process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          { text: "HKZW-FLD01", id: "000F", name: "Identifier", type: "0200" },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller in add mode (see the controller’s manual).\n4) Click the Z-button once or triple click the Z-button quickly, the LED indicator should blink fast. \n5) Wait for the adding process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "000F",
            name: "FrequencyName",
            type: "0200",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2641/Flood Sensor Specification Engineering.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2641/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "14",
            instance: "1",
            label: "Enable/Disable BASIC SET command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The Flood sensor can send BASIC SET command to nodes associated with group 2.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Value of the BASIC SET",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The Flood sensor can reverse its value of BASIC SET when flooding is triggered.",
            Item: [
              {
                label:
                  "Send BASIC SET VALUE = 255 to nodes associated with group 2 when flooding alarm is triggered. Send BASIC SET VALUE = 0 to nodes associated with group 2 when flooding alarm is canceled.",
                value: "0",
              },
              {
                label:
                  "Send BASIC SET VALUE = 0 to nodes associated with group 2 when flooding alarm is triggered. Send BASIC SET VALUE = 255 to nodes associated with group 2 when flooding alarm is canceled.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Enable/Disable flooding alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Enable/Disable shock alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Enable/Disable high temperature alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Set the high temperature alarm trigger value",
            max: "2570",
            min: "-670",
            size: "2",
            type: "short",
            Help:
              "US: -670 - 2570 (-67 - 257 F)\n            Other: -550 - 1250 (-55 - 125 C)",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Enable/Disable low temperature alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Set the low temperature alarm trigger value",
            max: "2570",
            min: "-670",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "US: -670 - 2570 (-67 - 257 F)\n            Other: -550 - 1250 (-55 - 125 C)",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Enable/Disable blinking LED when alarm being triggered",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
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
            value: "20",
            Help:
              'This parameter defines a battery level as the "low battery".',
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
              { index: "2", label: "BASIC SET command", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

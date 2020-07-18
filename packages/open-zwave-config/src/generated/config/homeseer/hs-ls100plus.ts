import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/000C:000A:0201",
            name: "OzwInfoPage",
          },
          { text: "images/homeseer/hs-ls100plus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2735/",
            id: "000A",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text:
              "Press and hold the Z button for more than 5 seconds and release.",
            name: "WakeupDescription",
          },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller in add mode (see the controller’s manual).\n4) Click the Z-button once or triple click the Z-button quickly, the LED indicator should blink fast. \n5) Wait for the adding process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          { text: "LEAK SENSOR", name: "Name" },
          {
            text:
              "LEAK SENSOR  is capable of both detecting leaks and floods and when the level of water gets too low in pool or tank, LEAK SENSOR can work with your z-wave network to prevent emergencies such as burst water boiler to leaking air conditioners. With Z-Wave, the scope to save money is endless.\n\nThe features list:\n1)\tZ-Wave Plus certified for wide compatibility (500 serials product).\n2)\tSecurity 0 and security 2 framework implemented with AES-128 encryption.\n3)\tContains an extension water detecting probe. \n4)\tTemperature measurement.\n5)\tVibration sensor.\n6)\tThe battery life is up to 1 year. \n7)\tLow battery alert",
            name: "Description",
          },
          {
            text:
              "1) Power on the device\n2) Press and hold the Z button for more than 20 seconds,\n3) If holding time more than 20seconds, the LED indicator will keep on for 2 seconds, which means resetting is complete.\n4) The reset feature works only when the device has been included into a Z-Wave network.\n\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2735/User Manual revised 1211.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1) Open the cover.\n2) Place the device within the direct range of your Z-Wave controller.\n3) Set the main controller remove mode (see the controller’s manual).\n4) Triple click the Z-button quickly, the LED indicator should blink fast.\n5) Wait for the removing process to end.\n6) Successful adding will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000A",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "HS-LS100+", id: "000A", name: "Identifier", type: "0201" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2735/xml",
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
            label: "Basic set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable / disable the basic set command send to group 2",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Value for basic set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Define BASIC SET VALUE to nodes associated with group 2 when flooding alarm is triggered and is canceled.\n            ",
            Item: [
              {
                label: "255 alarm is triggered, 0 alarm is canceled",
                value: "0",
              },
              {
                label: "0 alarm is triggered, 255 alarm is canceled",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "17",
            label: "Leak report interval",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "5",
            Help: "Leak report interval, minutes. O to disable.",
          },
          {
            genre: "config",
            index: "18",
            label: "Shock sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                When the value is Disable, the product will not sends a vibration alarm after moving or shaking.\n                When the value is Enable, the product will sends a vibration alarm after moving or shaking.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "Temperature report interval",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "0",
            Help: "Temperature report interval, minutes. O to disable.",
          },
          {
            genre: "config",
            index: "20",
            label: "High temperature trigger value",
            max: "2570",
            min: "-670",
            size: "2",
            type: "short",
            units: "",
            value: "1040",
            Help:
              "\n                Set the high temperature alarm trigger value.\n                Available: -670 to 2570 (-67.0 to 257.0 F)\n                Default: 1040 (104.0 F)\n            ",
          },
          {
            genre: "config",
            index: "22",
            label: "Low temperature trigger value",
            max: "2570",
            min: "-670",
            size: "2",
            type: "short",
            units: "",
            value: "320",
            Help:
              "\n                Set the low temperature alarm trigger value.\n                Available: -670 to 2570 (-67.0 to 257.0 F)\n                Default: 320 (32.0 F)\n            ",
          },
          {
            genre: "config",
            index: "24",
            label: "Blinking LED when alarm triggers",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                When the value is Disable, the product will not alarm when being triggered.\n                When the value is Enable, the product will alarm when being triggered.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "32",
            label: "Low battery threshold",
            max: "50",
            min: "10",
            size: "1",
            type: "list",
            units: "%",
            value: "20",
            Help: "Low battery reporting threshold, %.",
            Item: [
              { label: "10", value: "10" },
              { label: "20", value: "20" },
              { label: "30", value: "30" },
              { label: "40", value: "40" },
              { label: "50", value: "50" },
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
              { index: "2", label: "Basic Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

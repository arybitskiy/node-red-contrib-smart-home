import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:000A:0101",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-so03.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1854/",
            id: "000A",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text:
              "1) Insert the Plug into a socket.\n2) Set the Z-Wave network controller into the exclusion mode (see Z-Wave controller operating manual).\n3) Triple click the Z button.\n4) RGB LED indicator will blink orange till the removing process is completed, than the indicator will keep orange for 3 seconds.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000A",
            name: "FrequencyName",
            type: "0101",
          },
          { text: "Smart Plug", name: "Name" },
          {
            text:
              "1) Insert the Plug into a socket,\n2) Press and hold the Z button for more than 20 seconds,\n3) If holding time more than 20seconds, the RGB LED indicator will keep yellow for 2 seconds, which means resetting is complete. \n Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Smart plug is a Z-Wave Switch plugin module specifically used to enable Z-Wave command and control (on/off) of any plug-in tool. It can report wattage consumption or kWh energy usage. \nSmart Plug is also a security Z-Wave device and supports the Over The Air (OTA) feature for the product’s firmware upgrade .",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1854/HKZW-SO03_manual.pdf",
            name: "ProductManual",
          },
          { text: "HKZW-SO03", id: "000A", name: "Identifier", type: "0101" },
          {
            text:
              "1) Connect the power supply.\n2) Set the Z-Wave network main controller into inclusion mode (see Z-Wave network controller operating manual).\n3) Triple click the Z-button or power up the device , RGB LED indicator should blink fast in blue.\n4) Smart Plug should be recognized and included into the Z-Wave network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1854/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "20",
            instance: "1",
            label: "Overload Protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "turns relay off once voltage exceeds 16.5A for over 5 secs if enabled",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "On/Off Status Recovery After Power Failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Recovery state for power failure",
            Item: [
              { label: "Previous setting", value: "0" },
              { label: "ON", value: "1" },
              { label: "OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "On/Off Status Change Notifications ",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Send notifications to associated devices",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Send any change", value: "1" },
              { label: "Send manual changes", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "LED Indicator Control",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "LED Indicator Control",
            Item: [
              { label: "Display power consumption always", value: "0" },
              {
                label: "Display power consumption at state change",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "151",
            instance: "1",
            label: "Power Report Value Threshold",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "50",
            Help: "Minimum change in watts to report",
          },
          {
            genre: "config",
            index: "152",
            instance: "1",
            label: "Power Report Percentage Threshold",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help: "Minimum percentage change to report",
          },
          {
            genre: "config",
            index: "171",
            instance: "1",
            label: "Power Report Frequency",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "30",
            Help: "How often to report power consumption (W) in secs",
          },
          {
            genre: "config",
            index: "172",
            instance: "1",
            label: "Energy Report Frequency ",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "300",
            Help: "How often to report energy usage (KWH) in secs",
          },
          {
            genre: "config",
            index: "173",
            instance: "1",
            label: "Voltage Report Frequency ",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help: "How often to report voltage (V) in secs",
          },
          {
            genre: "config",
            index: "174",
            instance: "1",
            label: "Electricity Report Frequency",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help: "How often to report electrical current (A) in secs",
          },
        ],
      },
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

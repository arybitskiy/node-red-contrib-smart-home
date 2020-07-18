import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:004A:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw074.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1163/",
            id: "004A",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "The  Aeotec  by  Aeon  Labs  MultiSensor  Gen5  looks  like a motion sensor and it  acts like one too.  But it’s also so much more. Installing this 1 piece of Z-Wave technology is  the same as installing 4  pieces of  Z-Wave  technology.  Your home control network will immediately understand motion, temperature, humidity and light readings wherever Multisensor installed. Those intelligent readings will equate to intelligence  automation. And intelligent automation will give you the perfect, smart home.",
            name: "Description",
          },
          { text: "ZW074-A", id: "004A", name: "Identifier", type: "0102" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Z-Wave button that you can find in back of the product.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1170/Instructions - MultiSensor Gen5 MCert1.pdf",
            name: "ProductManual",
          },
          { text: "MultiSensor Gen5", name: "Name" },
          {
            text:
              "Press and hold the Z-Wave button that you can find in back of the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Z-Wave button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the Z-Wave button for 3 seconds will trigger sending the Wake up notification command. If press the Z-Wave button 3 times, the MultiSensor will wake up for 10 minutes.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "004A",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text: "https://products.z-wavealliance.org/products/1169/",
            id: "004A",
            name: "ZWProductPage",
            type: "0202",
          },
          { text: "ZW074-B", id: "004A", name: "Identifier", type: "0202" },
          {
            text: "Australia / New Zealand",
            id: "004A",
            name: "FrequencyName",
            type: "0202",
          },
          {
            text: "https://products.z-wavealliance.org/products/1170/",
            id: "004A",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "ZW074-C", id: "004A", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe)",
            id: "004A",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1163/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1169/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1170/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            label: "Wake up 10 minutes on Power On",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Stay awake for 10 minutes after batteries are inserted",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "On time",
            max: "15300",
            min: "1",
            type: "short",
            units: "seconds",
            value: "240",
            Help:
              "How long should the device associated to multi sensor keep state On before sending it Off command (if the value is bigger than 255, the value would be rounded to next integer in minutes)",
          },
          {
            genre: "config",
            index: "4",
            label: "Enable Motion Sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable Motion Sensor",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Command Options",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Which commands to send when PIR motion sensor triggered\n\t\t\tOZW Ideal Value is Binary Sensor Report",
            Item: [
              { label: "Basic Set (default) ", value: "1" },
              { label: "Binary Sensor Report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "40",
            label: "Reporting Threshold",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable the selective reporting only when measurements reach a certain threshold or percentage \n\t\t\tset in the threshold settings.  This is used to reduce network\n\t\t\ttraffic.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "41",
            label: "Temperature Reporting Threshold",
            max: "39321",
            min: "0",
            size: "2",
            type: "short",
            units: "%",
            value: "256",
            Help:
              "Threshold change in temperature to induce an automatic report.  \n\t\t\tNote: \n\t\t\t1. When the unit is Celsius, threshold=Value. \n\t\t\t2. When the unit is Fahrenheit, threshold=Value*1.8. The accuracy is 0.1. \n\t\t\t3. The high byte is the part of integer, the low byte is the fractional part. \n\t\t\t",
          },
          {
            genre: "config",
            index: "42",
            label: "Humidity Reporting Threshold",
            max: "39321",
            min: "0",
            size: "2",
            type: "short",
            units: "%",
            value: "1280",
            Help:
              "Threshold change in humidity to induce an automatic report. \n\t\t\tNote: \n\t\t\tThe accuracy is 0.1. \n\t\t\tThe high byte is the part of integer, the low byte is the fractional part. \n\t\t\t",
          },
          {
            genre: "config",
            index: "43",
            label: "Luminance Reporting Threshold",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "LUX",
            value: "25600",
            Help:
              "Threshold change in luminance to induce an automatic report. ",
          },
          {
            genre: "config",
            index: "44",
            label: "Battery Reporting Threshold",
            max: "39321",
            min: "0",
            size: "2",
            type: "short",
            units: "%",
            value: "1280",
            Help:
              "Threshold change in battery level to induce an  automatic report. \n\t\t\tNote: \n\t\t\tThe accuracy is 0.1. \n\t\t\tThe high byte is the part of integer, the low byte is the fractional part.  \n\t\t\t",
          },
          {
            genre: "config",
            index: "46",
            label: "Low Temp Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable to send the alarm report of low temperature(Less than 15 Degress C)\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "101",
            label: "Group 1 Reports",
            type: "int",
            value: "255",
            Help:
              "Which reports need to send automatically in timing intervals for group 1. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            genre: "config",
            index: "102",
            label: "Group 2 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 2. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            genre: "config",
            index: "103",
            label: "Group 3 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 3. Bitsets: 0 -> Battery report, 5 -> Temperature, 6 -> Humidity, 7 -> Luminosity",
          },
          {
            genre: "config",
            index: "111",
            label: "Group 1 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "1800",
            Help:
              "The interval of sending report group 1. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "112",
            label: "Group 2 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "1800",
            Help:
              "The interval of sending report group 2. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "113",
            label: "Group 3 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "1800",
            Help:
              "The interval of sending report group 3. 1 to 2678400 seconds",
          },
          {
            genre: "config",
            index: "252",
            label: "Enable/disable Lock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n\t\t\t\tEnable/disable Lock Configuration\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset to default",
            type: "button",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults.",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

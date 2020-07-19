import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Motion Sensor", name: "Name" },
          {
            text: "Battery powered Z-Wave Plus motion sensor",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/017F:0001:0101",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.wink.com/products/wink-motion-sensor/",
            name: "ProductPage",
          },
          {
            text: "https://www.wink.com/help/products/",
            name: "ProductSupport",
          },
          { text: "images/wink/wnk-mot1.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2482/wink-motion-manual.pdf",
            name: "ProductManual",
          },
          { name: "WakeupDescription" },
          {
            text:
              "1. Bring the sensor within range of your controller.\r\n    2. If the devices is new, remove the pull tab.  Otherwise remove, then replace the battery.\r\n    The LED will flash 5 times to indicate inclusion.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Remove the sensor cover by twisting counter clockwise.\r\n    2. Press the connect button (next to the battery) 3 times.\r\n    The LED will flash 5 times to indicate exclustion.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Remove the sensor cover by twisting counter clockwise.\r\n    2. Hold the connect button (next to the battery) for 10 seconds until the LED blinks.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2482",
            id: "0001",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0101",
          },
          { text: "WNK-MOT1", id: "0001", name: "Identifier", type: "0101" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial information based on Z-Wave alliance database information",
                author: "Jeremy M. Johnson",
                date: "21 June 202020",
                revision: 1,
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
            label: "Sensitivity",
            max: "255",
            min: "8",
            type: "byte",
            units: "",
            value: "255",
            Help: "Motion sensor sensitivity Level. Valid values 8 to 255.",
          },
          {
            genre: "config",
            index: "2",
            label: "Motion Cleared Time Delay",
            max: "600",
            min: "5",
            type: "int",
            units: "seconds",
            value: "255",
            Help: "Valid values 5 to 600 seconds (10 mins).",
          },
          {
            genre: "config",
            index: "3",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "0: Turn Off\r\n      1 to 99: Dim Level\r\n      255: On\r\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Enable/Disable Motion Detection",
            max: "1",
            min: "0",
            type: "bool",
            units: "",
            value: "1",
            Help: "On = Enable Motion Detection.",
          },
          {
            genre: "config",
            index: "5",
            label: "Group 2 Ambient Light Threshold",
            max: "1000",
            min: "5",
            type: "int",
            units: "lux",
            value: "1000",
            Help:
              "Ambient Light Threshold for the Group 2 Association trigger.  Vaid values 5 to 1000 lux.",
          },
          {
            genre: "config",
            index: "6",
            label: "Retrigger Interval",
            max: "8",
            min: "1",
            type: "byte",
            units: "seconds",
            value: "8",
            Help:
              "Prevent retriggering within the specified time period.  Valid values 1 to 8 seconds.",
          },
          {
            genre: "config",
            index: "7",
            label: "Light Sensing Interval",
            max: "3600",
            min: "60",
            type: "byte",
            units: "seconds",
            value: "3600",
            Help: "Valid values 60 to 3600 seconds.",
          },
          {
            genre: "config",
            index: "8",
            label: "Enable/Disable Group 2 Ambient Light Threshold",
            max: "1",
            min: "0",
            type: "bool",
            units: "",
            value: "0",
            Help:
              "On = Enable the Ambient Light Threshold when using the Group 2 Association.",
          },
          {
            genre: "config",
            index: "9",
            label: "Ambient Light Sensitivity Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "lux",
            value: "255",
            Help: "Valid values 0 to 255 lux.",
          },
          {
            genre: "config",
            index: "10",
            label: "LED Indicator",
            max: "1",
            min: "0",
            type: "bool",
            units: "",
            value: "1",
            Help: "On = Enable the LED Indicator.",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "BASIC_SET", max_associations: "5" },
              {
                index: "3",
                label: "NOTIFICATION_REPORT",
                max_associations: "5",
              },
              {
                index: "4",
                label: "SENSOR_BINARY_REPORT",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

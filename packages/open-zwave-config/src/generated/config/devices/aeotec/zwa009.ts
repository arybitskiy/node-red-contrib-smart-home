import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0002:0009",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa009.png", name: "ProductPic" },
          { text: "Water Sensor 7 Pro", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0009",
          },
          { text: "ZWA009-C", id: "0002", name: "Identifier", type: "0009" },
          {
            text:
              "This device measures the three air quality parameters temperature, humidity and dew point and reports them to a central controller. \n      Besides this, the device can directly control groups of other Z-Wave devices on over- and undershooting a set temperature and/or humidity parameter. \n      This can be used to establish control loops for temperature and humidity. \n      The device wakes up every 15 minutes to measure the values and it will send unsolicited reports when values change. \n      Additionally, the device will report all values on request.\n      The AërQ Sensor is actively monitoring the danger of mould in a room based on the temperature and humidity and will issue alarm warnings when critical air conditions met. \n      Wireless Alarm and red and a green blinking LED will indicate a mould condition. \n      This local LED warning function is also available when the device is not included in any Z-Wave network and works stand alone.",
            name: "Description",
          },
          { text: "Press the button once", name: "WakeupDescription" },
          {
            text:
              "1. Insert the battery.\n      2. Press the button quickly three times in a row.",
            name: "InclusionDescription",
          },
          {
            text: "1. Press the button quickly three times in a row.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Keep the button pressed for 10 seconds. Then the green LED will start blinking. \n    Release the button, when the LED stops blinking. Your device is reset to factory default now.",
            name: "ResetDescription",
          },
          {
            text:
              "https://aeotec.freshdesk.com/support/solutions/folders/6000236759",
            name: "ProductManual",
          },
          {
            text:
              "https://aeotec.freshdesk.com/support/solutions/folders/6000236759",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Config File",
                author: "Justin Hammond",
                date: "06 July 2020",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Minimum Temperature change to report",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "20",
            Help:
              "This value defines the minimum change of temperature to cause an unsolicited report of humidity to the central controller using Lifeline. \n      If the value is set to 0, there will be no reports sent to the controller, when the temperature changes. \n      However, periodic reports, managed by configuration parameter 4, may still be active.\n      ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Minimum humidity change to report",
            max: "20",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "This value defines the minimum change of humidity to cause an unsolicited report of humidity to the central controller using Lifeline. \n      If the value is set to 0, there will be no reports sent to the controller, when the humidity changes. \n      However, periodic reports, managed by configuration parameter 4, may still be active.\n      ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Periodic Reports",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "43200",
            Help:
              "This parameter defines the time interval to send an unsolicited report. \n      If the value is set to 0, there will be no periodic reports sent to the controller. \n      However, reports on temperature/humidity changes, managed by configuration parameters 1 and 2, may still be active.\n      ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Temperature Upper Watermark value",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            units: "1/10 degree",
            value: "0",
            Help:
              "This parameter defines a temperature. \n      If the measured temperature surpasses this watermark a BASIC command is sent into Association Group 2\n      ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Temperature Lower Watermark value",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            units: "1/10 degree",
            value: "0",
            Help:
              "This parameter defines a temperature. \n      If the measured temperature dropps below this watermark a BASIC command is sent into Association Group 3\n      ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Humidity Upper Watermark value",
            max: "90",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "This parameter defines a relative humidity. \n      If the measured relative humidity surpasses this watermark a BASIC command is sent into Association Group 4\n      ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Humidity Lower Watermark value",
            max: "90",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "This parameter defines a relative humidity. \n      If the measured temperature drops below this relative humidity a BASIC command is sent into Association Group 5\n      ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Low Temperature Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This defines what BASIC command shall be sent out into association group 3\n      ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "High Temperature Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This defines what BASIC command shall be sent out into association group 2\n      ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Low Humidity Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This defines what BASIC command shall be sent out into association group 5\n      ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "High Humidity Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This defines what BASIC command shall be sent out into association group 4\n      ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Offset value for Mould danger notification",
            max: "10",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This value allows to increase the humidity threshold for mould danger notification by max 10%\n      ",
          },
          {
            genre: "config",
            index: "255",
            instance: "1",
            label: "Reset Parameter",
            max: "14294967295",
            min: "0",
            size: "4",
            type: "int",
            write_only: "true",
            value: "0",
            Help:
              "This parameter helps reset configuration parameters and the device to factory defaults\n      ",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "Reset all Parameter settings to their default settings",
                value: "4294967294",
              },
              {
                label:
                  "Completely factory reset sensor and send device reset locally notification",
                value: "4294967295",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "High Temperature Notification",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Low Temperature Notification",
                max_associations: "5",
              },
              {
                index: "4",
                label: "High Humidity Notification",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Low Humidity Notification",
                max_associations: "5",
              },
              { index: "6", label: "Air Temperature", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

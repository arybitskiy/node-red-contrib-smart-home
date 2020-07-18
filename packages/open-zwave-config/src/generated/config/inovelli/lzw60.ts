import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/031E:000d:0001",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/lzw60.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3723",
            id: "0001",
            name: "ZWProductPage",
            type: "000d",
          },
          {
            text:
              "https://inovelli.com/shop/smart-sensors/z-wave-4-in-1-sensor/",
            name: "ProductPage",
          },
          {
            text:
              "https://inovelli.com/shop/smart-sensors/z-wave-4-in-1-sensor/",
            name: "ProductSupport",
          },
          {
            text:
              "To Exclude your switch, put your HUB in exclusion mode and press the Sensor Button on the back of the device one (1) time.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "000d",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3723/Inovelli%204-1%20Sensor%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Control and Monitor Temperature, Light, Motion, and Humidity with the 4 in 1 Sensor.",
            name: "Description",
          },
          { text: "LZW60 4-in-1 Sensor", name: "Name" },
          { text: "LZW60", id: "0001", name: "Identifier", type: "000d" },
          {
            text:
              "To include your switch, start the inclusion process on your HUB and Sensor Button on the back of the device one (1) time.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Release",
                author: "Eric Maycock - ericm@inovelli.com",
                date: "7 Nov 2019",
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
            type: "byte",
            size: "1",
            index: "10",
            label: "Low Battery Power Level Alarm",
            min: "10",
            max: "50",
            value: "10",
            Help:
              "\n      Value at which the sensor reports low battery to the gateway\n\t  Range:10-50\n      Default: 10\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "12",
            label: "PIR Sensitivity",
            min: "0",
            max: "10",
            value: "8",
            Help:
              "\n      Change the sensitivity of the PIR (Motion) Sensor\n\t  0 = off, 1 = Low sensitivity, 10 = High sensitivity\n      Default: 8\n      ",
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "13",
            label: "PIR Trigger Time (seconds)",
            min: "5",
            max: "15300",
            value: "30",
            Help:
              "\n      The amount of seconds between motion detection (ie: the interval)\n\t  Range:5-15300\n      Default: 30\n      ",
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "14",
            label: "Basic Set Command Send after PIR Trigger",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "\n      Should Basic Set Command be sent after PIR is triggered? This is used to turn other devices on/off when motion is detected.\n      Default: No\n      ",
            Item: [
              { value: "0", label: "No" },
              { value: "1", label: "Yes" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "15",
            label: "PIR Trigger Correspondence Action",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "\n      Ability to reverse the Basic Set behavior for devices associated in group 2\n      Default: ON when motion is tripped, OFF when motion stops\n      ",
            Item: [
              {
                value: "0",
                label: "ON when motion is tripped, OFF when motion stops",
              },
              {
                value: "1",
                label: "OFF when motion is tripped, ON when motion stops",
              },
            ],
          },
          {
            genre: "config",
            type: "int",
            size: "4",
            index: "101",
            label: "Temperature Sensor Read Interval",
            min: "0",
            max: "2768400",
            value: "7200",
            Help:
              "\n      The interval in which the temperature sensor is checked, in seconds. Set to 0 to disable (Note: will be rounded to the nearest minute)\n      Default: 7200 (2 hours)\n      ",
          },
          {
            genre: "config",
            type: "int",
            size: "4",
            index: "102",
            label: "Humidity Sensor Read Interval",
            min: "0",
            max: "2768400",
            value: "7200",
            Help:
              "\n      The interval in which the humidity sensor is checked, in seconds. Set to 0 to disable (Note: will be rounded to the nearest minute)\n      Default: 7200 (2 hours)\n      ",
          },
          {
            genre: "config",
            type: "int",
            size: "4",
            index: "103",
            label: "Luminance Sensor Read Interval",
            min: "0",
            max: "2768400",
            value: "7200",
            Help:
              "\n      The interval in which the luminance sensor is checked, in seconds. Set to 0 to disable (Note: will be rounded to the nearest minute)\n      Default: 7200 (2 hours)\n      ",
          },
          {
            genre: "config",
            type: "int",
            size: "4",
            index: "104",
            label: "Battery Level Read Interval",
            min: "0",
            max: "2768400",
            value: "86400",
            Help:
              "\n      The interval in which the battery level is checked, in seconds. Set to 0 to disable (Note: will be rounded to the nearest minute)\n      Default: 86400 (24 hours)\n      ",
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "110",
            label: "Sensor Report Method",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "\n      Sensor reports are only checked at the interval defined in parameters 101-104.  Should the sensor data always be reported, or only if the value has changed more than the threshold configured in parameters 111-114?\n\t  Always: Send sensor data every interval, even if the value did not change.\n\t  Threshold: Send sensor data on interval, but only if the value has changed by more than the defined threshold since the last report was sent.\n\t  Default: Always\n      ",
            Item: [
              { value: "0", label: "Always" },
              { value: "1", label: "Threshold" },
            ],
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "111",
            label: "Temperature Threshold",
            min: "1",
            max: "500",
            value: "10",
            Help:
              '\n      Set the temperature threshold of the sensor.  If Sensor Report Method = "Threshold", the temperature change must exceed this value in order to be reported to the hub.\n\t  Range: 1-500\n\t  1 = 0.1 degrees Celcius, 500 = 50 degrees Celcuis\n      Default: 10 (1 degree Celcuis)\n      ',
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "112",
            label: "Humidity Threshold",
            min: "1",
            max: "32",
            value: "5",
            Help:
              '\n      Set the humidity threshold of the sensor.  If Sensor Report Method = "Threshold", the humidity change must exceed this value in order to be reported to the hub.\n\t  Range: 1-32, 1 = 1%, 32 = 32%\n      Default: 5%\n      ',
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "113",
            label: "Luminance Threshold",
            min: "1",
            max: "65528",
            value: "150",
            Help:
              '\n      Set the luminance threshold of the sensor (in lux).  If Sensor Report Method = "Threshold", the luminance change must exceed this value in order to be reported to the hub.\n\t  Range: 1-65528\n      Default: 150\n      ',
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "114",
            label: "Battery Threshold",
            min: "1",
            max: "100",
            value: "10",
            Help:
              '\n      Set the battery threshold of the sensor (percent).  If Sensor Report Method = "Threshold", the battery level change must exceed this value in order to be reported to the hub.\n\t  Range: 1-100\n      Default: 10\n      ',
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
              {
                index: "2",
                label: "PIR Trigger Basic Set",
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

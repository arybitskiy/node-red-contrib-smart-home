import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Mold Detector", name: "Name" },
          {
            text:
              "This device measures the three air quality parameters temperature, humidity and dew point and reports them to a central controller. Beside this, the device can directly control groups of other Z-Wave devices on over- and undershooting a set temperature and/or humidity parameter. This can be used to establish control loops for temperature and humidity. The device wakes up every 15 minutes to measure the values and it will send unsolicited reports when values change, Additionally the device will report all values request on.\n\tThe mold detector is actively monitoring the danger of mold in a room based on the temperature and humidity and will issue alarm warnings when critical air conditions are met. Wireless Alarm and red and a green blinking LED will indicate a mold condition. This local LED warning function is also available when the device is not included in any Z-Wave network and works stand alone.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0154:0014:0004",
            name: "OzwInfoPage",
          },
          {
            text: "https://popp.eu/products/sensors/mold-detector-701202/",
            name: "ProductPage",
          },
          { text: "https://popp.eu/support/", name: "ProductSupport" },
          { text: "images/popp/701202.png", name: "ProductPic" },
          {
            text:
              "https://manuals.zwave.eu/backend/make.php?lang=EN&sku=POPE701202&cert=",
            name: "ProductManual",
          },
          {
            text: "Press the tamper button on the side of the appliance once.",
            name: "WakeupDescription",
          },
          {
            text:
              "1. Open the housing.\n\t2. Remove the battery protection.\n\t3. Press the tamper button on the side of the appliance three times quickly.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Open the housing.\n\t2. Press the tamper button on the side of the appliance three times quickly.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Remove the cover, press the button for 5 seconds until it flashes green. Release the button and press the button again until the blinking stops.",
            name: "ResetDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/products/3249?selectedFrequencyId=1",
            id: "0014",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0014",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "701202", id: "0014", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial configuration file, based on information from the vendor's and z-wavealliance.org websites, but with small linguistic changes and a few  corrections.",
                author: "Jan Coolen - jan@coolen.pt",
                date: "01 March 2019",
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
            label: "Minimum Temperature change to report",
            max: "100",
            min: "0",
            type: "byte",
            units: "1/10 degree",
            value: "20",
            Help:
              "\n\tThis value defines the minimum change of temperature to cause an unsolicited report of humidity to the central controller using Lifeline.\n\tIf the value is set to 0, there will be no reports sent to the controller, when the temperature changes. However, periodic reports, managed by configuration parameter 4, may still be active. \n\tDefault Value: 20\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Minimum humidity change to report",
            max: "20",
            min: "0",
            type: "byte",
            units: "%",
            value: "7",
            Help:
              "\n\tThis value defines the minimum change of humidity to cause an unsolicited report of humidity to the central controller using Lifeline.\n\tIf the value is set to 0, there will be no reports sent to the controller, when the humidity changes. However, periodic reports, managed by configuration parameter 4, may still be active.\n\tDefault value: 7\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Periodic Reports",
            max: "65536",
            min: "900",
            type: "short",
            units: "seconds",
            value: "43200",
            Help:
              "\n\tThis parameter defines the time interval to send an unsolicited report.\n\tIf the value is set to 0, there will be no periodic reports sent to the controller. However, reports on temperature/humidity changes, managed by configuration parameters 1 and 2, may still be active.\n\tDefault value: 43200\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Temperature Upper Watermark value",
            max: "1000",
            min: "0",
            type: "short",
            units: "1/10 degrees",
            value: "0",
            Help:
              "\n\tThis parameter defines a temperature. If the measured temperature surpasses this watermark a BASIC command is sent into Association Group 2\n\tDefault Value: 0\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "Temperature Lower Watermark value",
            max: "1000",
            min: "653356",
            type: "short",
            units: "1/10 degrees",
            value: "0",
            Help:
              "\n\tThis parameter defines a temperature. If the measured temperature drops below this watermark a BASIC command is sent into Association Group 3\n\tDefault Value: 0\n      ",
          },
          {
            genre: "config",
            index: "7",
            label: "Humidity Upper Watermark value",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "\n\tThis parameter defines a relative humidity. If the measured relative humidity surpasses this watermark a BASIC command is sent into Association Group 4\n\tDefault Value: 0\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Humidity Lower Watermark value",
            max: "90",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "\n\tThis parameter defines a relative humidity. If the measured relative humidity drops below this relative humidity a BASIC command is sent into Association Group 5 \n\tDefault Value: 0\n      ",
          },
          {
            genre: "config",
            index: "9",
            label: "Low Temperature Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n\tThis defines what BASIC command shall be sent out into association group 3 \n\tDefault Value: 255\n      ",
          },
          {
            genre: "config",
            index: "10",
            label: "High Temperature Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\tThis defines what BASIC command shall be sent out into association group 2 \n\tDefault Value: 0\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "Low Humidity Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n\tThis defines what BASIC command shall be sent out into association group 5 \n\tDefault Value: 255\n      ",
          },
          {
            genre: "config",
            index: "12",
            label: "High Humidity Trigger BASIC Set Command Value",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\tThis defines what BASIC command shall be sent out into association group 4 \n\tDefault Value: 0\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                index: "2",
                label: "Temperature High Trigger",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Temperature Low Trigger",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Humidity High Trigger",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Humidity Low Trigger",
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

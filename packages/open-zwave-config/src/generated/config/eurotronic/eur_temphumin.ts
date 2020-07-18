import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0148:0001:0004",
            name: "OzwInfoPage",
          },
          { text: "Temperature and Humidity Sensor", name: "Name" },
          { text: "images/eurotronic/eur_temphumid.png", name: "ProductPic" },
          {
            text:
              "Start Inclusion mode of your primary Z-Wave Controller.\nPress the network button three times within 1 second.",
            name: "InclusionDescription",
          },
          {
            text:
              "Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n\nPress and hold the network button for at least 10 seconds. The temperature humidity sensor will indicate\nthe reset blinking pattern once the reset is completed.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "https://eurotronic.org/produkte/sensoren/temperatur-feuchte-sensor/",
            id: "0001",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "https://eurotronic.org/", name: "ProductManual" },
          {
            text:
              "This Z-Wave sensor provides comprehensive information on indoor\ntemperature and humidity. \n• Returns the following values:\n  - Temperature (°C)\n  - Humidity (%)\n  - Dew point (°C)\n• Supports Z-Wave Plus S2 security (encryption)",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Import",
                author: "gpgmailencrypt@gmx.de",
                date: "13 Mar 2020",
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
        Instance: [{ index: "1" }],
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Temperature on Change Reporting",
            min: "0",
            max: "50",
            value: "5",
            size: "1",
            Help:
              "\n                0: Don't report temperature changes\n                1-50: Report temperature changes from 0,1°C - 5,0°C \n                Default: 5\n            ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Humidity on Change Reporting",
            min: "0",
            max: "10",
            value: "5",
            size: "1",
            Help:
              "\n                0: Don't report humidity changes\n                1-10: report humidity changes in 1% steps\n                Default: 5\n            ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Temperature Scale",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "\n                0: Temperature in Degrees Celcius\n                1: Temperature in Degrees Fahrenheit\n                Default: 0\n            ",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Temperature Resolution",
            min: "0",
            max: "2",
            value: "1",
            size: "1",
            Help:
              "\n                0: no decimal places\n                1: one decimal place\n                2: two decimal places\n                Default: 1\n            ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Humidity Resolution",
            min: "0",
            max: "2",
            value: "0",
            size: "1",
            Help:
              "\n                0: no decimal places\n                1: one decimal place\n                2: two decimal places\n                Default: 0\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Temperature" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

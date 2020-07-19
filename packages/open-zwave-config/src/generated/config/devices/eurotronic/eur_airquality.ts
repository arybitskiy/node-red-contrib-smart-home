import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0148:0001:0005",
            name: "OzwInfoPage",
          },
          { text: "images/eurotronic/eur_airquality.png", name: "ProductPic" },
          {
            text:
              "Start Inclusion mode of your primary Z-Wave Controller.\nPress the network button three times within 1 second.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://eurotronic.org/wp-content/uploads/2020/02/LGS-Z-Wave-Plus_BDA_web_EN-1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Start Exclusion mode of your primary Z-Wave Controller.\nPress the network button three times within 1 second.",
            name: "ExclusionDescription",
          },
          { text: "Air Quality Sensor", name: "Name" },
          {
            text:
              "Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n\nPress and hold the network button for at least 10 seconds. The Air Quality Sensor Z-Wave Plus will indicate\nthe reset blinking pattern once the reset is completed.",
            name: "ResetDescription",
          },
          {
            text:
              "This Z-Wave sensor provides comprehensive information on indoor\nair quality.\n• Multicolor LED for signalling ventilation recommendations\n• Returns the following values:\n  - VOC value (volatile organic compounds) in ppm\n  - CO2 value (as CO2 equivalent) in ppm\n  - Temperature (°C)\n  - Humidity (%)\n  - Dew point (°C)\n• Supports Z-Wave Plus S2 security (encryption)\n• Z-Wave repeater function\n• Operation with plug-in power supply unit",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0005",
          },
          {
            text: "https://eurotronic.org/produkte/sensoren/luftguetesensor/",
            id: "0001",
            name: "ZWProductPage",
            type: "0005",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from https://eurotronic.org/wp-content/uploads/2020/02/LGS-Z-Wave-Plus_BDA_web_EN-1.pdf/",
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
              "\n                0: No on change reporting (only time-based reports)\n                1-50: report if temperature changed by delta = 0,1°C - 5,0°C \n                Default: 5\n            ",
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
              "\n                0: No on change reporting (only time-based reports)\n                1-10: report if humidity changed by delta = 1% ...10%\n                Default: 5\n            ",
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
              "\n                Temperature in Degrees Celcius\n                Temperature in Degrees Fahrenheit\n                Default: Temperature in Degrees Celcius\n            ",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Temperature Resolution",
            min: "0",
            max: "2",
            value: "1",
            size: "1",
            Help:
              "\n                No resolution (example 22°C)\n                1/10 resolution (example 22.3°C)\n                1/100 resolution (example 22.35°C)\n                Default: No resolution (example 22°C)\n            ",
            Item: [
              { label: "No resolution (example 22°C)", value: "0" },
              { label: "1/10 resolution (example 22.3°C)", value: "1" },
              { label: "1/100 resolution (example 22.35°C)", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Humidity Resolution",
            min: "0",
            max: "2",
            value: "0",
            size: "1",
            Help:
              "\n                No resolution (example 33%)\n                1/10 resolution (example 33.4%)\n                1/100 resolution (example 33.45%\n                Default: No resolution (example 33%\n            ",
            Item: [
              { label: "No resolution (example 33%)", value: "0" },
              { label: "1/10 resolution (example 33.4%)", value: "1" },
              { label: "1/100 resolution (example 33.45%)", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "6",
            label: "VOC on Change Reporting",
            min: "0",
            max: "10",
            value: "5",
            size: "1",
            Help:
              "\n                0: No on change reporting (only time-based reports)\n                1-10: report if VOC reading changed by 100ppb - 1000ppb \n                Default: 5\n            ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "CO2eq on Change Reporting",
            min: "0",
            max: "10",
            value: "5",
            size: "1",
            Help:
              "\n                0: No on change reporting (only time-based reports)\n                1-10: report if CO2eq reading changed by 100ppm - 1000ppm \n                Default: 5\n            ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Air quality indication via LED",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "\n                0: No air quality indication via LEDs\n                1: Indicate measuered air quality via LEDs\n                Default: 1\n            ",
            Item: [
              { label: "No air quality indication via LEDs", value: "0" },
              { label: "Indicate measuered air quality via LEDs", value: "1" },
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

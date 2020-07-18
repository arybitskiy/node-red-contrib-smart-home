import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0006",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/st814.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/974/",
            id: "0001",
            name: "ZWProductPage",
            type: "0006",
          },
          { text: "ST814-2", id: "0001", name: "Identifier", type: "0006" },
          {
            text:
              "The Temperature/Humidity Detector is designed to monitor the current temperature and humidity of ambient environment. The reading of temperature/humidity can be reported to you on a regular base at your disposal.  If temperature/humidity reaches set points, the detector will send alerts to associated devices for further execution. The application example will be like this , Step 1 include both ST814 and ON/OFF Z-Wave module (like AN158 or AN157, HAN01…) into a Z-wave controller, Step2 associate ST814 to the ON/OFF Z-Wave module  Step3 connect the power wire of the heater or humidifier to the ON/OFF Z-Wave module and this simple 3 step will let user easy to control the temperature or humidity of the room automatically Since sudden temperature/humidity change may cause health problems to people such as elderly or very young children, Temp./Humid. Detector provides you most up-to-date temperature and humidity reading for you to watch your family’s health.",
            name: "Description",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Russia / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0006",
          },
          { text: "http://www.everspring.com/ST814.aspx", name: "ProductPage" },
          { text: "Temperature/Humidity Sensor", name: "Name" },
          {
            text: "http://www.everspring.com.tw/contact-us/index.asp",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/271/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/923/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/934/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/974/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
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
            label: "Basic Set Level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "\n\t\t\t\tDefines the level in the Basic Set event sent to group 2 when the sensor is triggered.  Default is 99 (full brightness for a Z-Wave dimmer). 0 disables.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature On Trigger",
            max: "99",
            min: "-20",
            type: "byte",
            units: "degrees",
            value: "30",
            Help:
              "\n\t\t\t\tTemperature level to trigger when a ON command is sent out. 99 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Temperature Off Trigger",
            max: "99",
            min: "-20",
            type: "byte",
            units: "degrees",
            value: "20",
            Help:
              "\n\t\t\t\tTemperature level to trigger when an OFF command is sent out. 99 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Humidity On Trigger",
            max: "99",
            min: "20",
            type: "byte",
            units: "%",
            value: "50",
            Help:
              "\n\t\t\t\tHumidity level to trigger when a ON command is sent out. 99 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Humidity Off Trigger",
            max: "99",
            min: "20",
            type: "byte",
            units: "%",
            value: "40",
            Help:
              "\n\t\t\t\tHumidity level to trigger when a OFF command is sent out. 99 will clear the value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Auto Report Time",
            max: "1439",
            min: "0",
            type: "short",
            units: "minutes",
            value: "0",
            Help:
              "\n\t\t\t\tSets the auto report time interval. 0 disables.\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "Auto Report Temperature",
            max: "70",
            min: "0",
            type: "byte",
            units: "degrees",
            value: "0",
            Help:
              "\n\t\t\t\tSets the auto report temperature trigger interval. 0 disables.\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Auto Report Humidity",
            max: "70",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "\n\t\t\t\tSets the auto report humidity trigger interval. 0 disables.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "3" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;

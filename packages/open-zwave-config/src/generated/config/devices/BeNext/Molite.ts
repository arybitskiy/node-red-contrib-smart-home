import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0100:0003",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/Molite.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/76/",
            id: "0100",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "http://www.benext.eu/en/products/molite-sensor/",
            name: "ProductPage",
          },
          {
            text:
              "With the Molite Sensor it is possible to measure movement, light and temperature. Utilize the MoLite Sensor for a variety of BeNext system features such as \n\n- Security \n- Personal Comfort \n- Lighting\n- General Automation\n\nVisit our website for a full description\nhttp://www.benext.eu/en/products/molite-sensor/",
            name: "Description",
          },
          { text: "info@benext.eu", name: "ProductSupport" },
          { text: "MoLiTe Sensor", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "MoLiTe", id: "0100", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/76/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
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
            instance: "1",
            label: "Set to Default",
            type: "byte",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Mode timeout",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            units: "seconds",
            value: "900",
            Help:
              "The time used in mode 2 to turn the sensor off. This Time will start running as soon as detection is seen.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Switch off time",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            units: "seconds",
            value: "2700",
            Help:
              "The switch off time will start running as soon as mode timeout is done. Motion sensor is turned on and when movement is detected again the mode timeout (cfg param 1) will start running all over again. When switch off time is done a basic off message is sent to the associated node.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Sensitivity",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "80",
            Help:
              "Sensitivity value between 0 and 127 (values above 127 will be reported as the set value but will be handled in SW as 127).",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "The mode",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "The mode that is entered after detection. If mode is 0 or higher then 3, that value will be reported after a get but will be handled in SW as mode 2.",
            Item: [
              { label: "no detection possible. Battery save mode", value: "1" },
              {
                label:
                  "normal operation mode: send on after detection and off after given time no detection",
                value: "2",
              },
              {
                label:
                  "Z-Wave chip is always on to request e.g. version or manufacturer id",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "The temperature offset",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help: "An offset for the temperature",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Light Table 100",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "17",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 100%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Light Table 90",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "38",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 90%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Light Table 80",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "85",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 80%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Light Table 70",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "186",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 70%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Light Table 60",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "407",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 60%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Light Table 50",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "891",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 50%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Light Table 40",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "1949",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 40%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Light Table 30",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "4265",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 30%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Light Table 20",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "9332",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 20%. See chapter light table for more information.",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: ". Light Table 10",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            value: "20417",
            Help:
              "If a LDR resistance measured lower than this value the returned light percentage is 10%. See chapter light table for more information.",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
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

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0002:0001",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sp814.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/977/",
            id: "0002",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand / U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "PIR Sensor", name: "Name" },
          {
            text:
              "The Motion Detector is designed with two detecting sensors, Passive Infra-Red (PIR) sensor and light sensor, to detect movement within a protected area, operating at 868.42 , 908.42, and 921.42 MHz. \n\nThe detector can be used as a security device or home automation device.  When the detector is cooperated with security appliances, the detector is acting as a security device by detecting changes in infra-red radiation levels. If a person moves within or across the devices field of vision, a trigger radio signal will be transmitted to cause full alarm condition in order to frighten intruders away. Alternatively, when the detector is worked with Z-Wave Controller , the detector can be set to perform the role of home automation device by detecting both changes in infra-red radiation levels and percentage of lux levels.  Once night falls, the percentage of ambient illumination is lower than preset value. If a person moves within or across the devices field of vision, a trigger radio signal will be transmitted so as to turn connected lightings for better illumination.\n\nTwo mounting methods are provided for varying detection range.  The detector can be mounted on a wall for farther detecting distance but narrower coverage; while for ceiling mounting, shorter detecting distance can be made but desired coverage can be expected at user’s disposal.",
            name: "Description",
          },
          { text: "SP814-2", id: "0002", name: "Identifier", type: "0001" },
          { text: "http://www.everspring.com/SP814.aspx", name: "ProductPage" },
          {
            text: "http://www.everspring.com/SP814.aspx",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/216/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/617/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/977/xml",
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
            units: "",
            value: "99",
            Help:
              "\n\tWhen Basic Set Command is sent where contains a value, the receiver will take it for consideration; for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Sensor Detecting Function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "The Detecting function can be Disabled of Enabled.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Sensitivity Level",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "6",
            Help: "1 Means lowest sensitivity and 10 means highest.",
            Item: [
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
              { label: "9", value: "9" },
              { label: "10", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Re-trigger Interval Setting",
            max: "3600",
            min: "5",
            type: "short",
            units: "Seconds",
            value: "5",
            Help:
              "\n\t  Adjust the interval of being re-triggered afer the detector has\tbeen triggered in seconds.\n\t  IMPORTANT: Parameter size is 1 5-127 or 2 if value > 127. Any value below 127 will be rejected!\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Lux Level",
            max: "100",
            min: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n\tSets minimum Lux Level of ambient illumination necessary for Motion Detector to trigger.\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "On-Off Duration",
            max: "3600",
            min: "5",
            type: "short",
            units: "Seconds",
            value: "5",
            Help:
              "\n\t  The duration determines how long before the module sends an Off after being triggered.\n\t  IMPORTANT: Parameter size is 1 5-127 or 2 if value > 127. Any value below 127 will be rejected!\t  \n      ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Control", max_associations: "3" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0116:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/hsm02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/607/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "http://www.ctc-chromagic.com/?q=contact",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "Magnetic door or window sensor.  Z-Wave protocol to secure the success of wireless two way communication\nVery small size\nWith tamper-proof protection\nEasy install\nLow battery indication\nAuto report the open/close status and battery status\nVery low power consumption (3 years battery life)",
            name: "Description",
          },
          {
            text: "http://www.ctc-chromagic.com/?q=zwave/HSM02",
            name: "ProductPage",
          },
          { text: "Chromagic (HSM02) Magnetic Sensor", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/14/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/607/xml",
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
            index: "0",
            label: "Basic Set Level",
            max: "99",
            min: "0",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t\t\tWhen Basic Set Command is sent where contains a value, the receiver will\n\t\t\t\ttake it for consideration; for instance, if a lamp module is received the Basic\n\t\t\t\tSet command of which value is decisive as to how bright of dim level of lamp\n\t\t\t\tmodule shall be.\n\t\t\t",
          },
          {
            genre: "config",
            index: "1",
            label: "Off Delay",
            max: "127",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t\t\tThe Configuration parameter that can be used to adjust the amount of delay\n\t\t\t\tbefore the OFF command is transmitted as Configuration Parameter #2.\n\t\t\t\tThis parameter can be configured with the value of 0 through 127, where 0\n\t\t\t\tmeans send OFF command immediately and 127 means 127 seconds of\n\t\t\t\tdelay\n\t\t\t",
          },
        ],
        Compatibility: "",
      },
      {
        id: "48",
        Value: [
          {
            genre: "user",
            index: "0",
            label: "Magnet open",
            max: "255",
            min: "0",
            read_only: "true",
            type: "bool",
            units: "",
            value: "",
            write_only: "false",
            Help: "\n\t\t\t\tMagnets to be opened/closed\n\t\t\t",
          },
        ],
        Compatibility: "",
      },
      {
        id: "113",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Alarm Type",
            max: "255",
            min: "0",
            read_only: "true",
            type: "byte",
            units: "",
            value: "12",
            verify_changes: "false",
            write_only: "false",
            Help:
              "Grouping 1, afterward, LED will light up for 1 sec to remind user when HSM02 is triggered due to open or close incidents.",
          },
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Alarm Report",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            verify_changes: "false",
            vindex: "0",
            write_only: "false",
            Help:
              "\n\t\t\t\tNo alarm : There is no alarm to report. \n\t\t\t\tPower applied : Once the power has been applied, Alarm Report Command will be sent to\n\t\t\t\tNodes in Grouping 1 to confirm the power applied status for HSM02. \n\t\t\t\tTamper event : Grouping 1, afterward, LED will light up for 1 sec to remind user when HSM02 is\n\t\t\t\ttriggered due to open or close incidents. \n\t\t\t\tLow battery : When HSM02 automatically wakes up, it will check the battery usage. When\n\t\t\t\tlow battery is detected, Alarm Report Command will be sent to Nodes in\n\t\t\t\tGrouping 1, afterward, LED will light up for 1 sec to remind user when HSM02 is\n\t\t\t\ttriggered due to open or close incidents.\n\t\t\t",
            Item: [
              { label: "No alarm", value: "0" },
              { label: "Power applied", value: "2" },
              { label: "Tamper event", value: "17" },
              { label: "Low battery", value: "255" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "128",
        Value: [
          {
            genre: "user",
            index: "0",
            label: "Battery Check",
            max: "100",
            min: "20",
            type: "byte",
            units: "%",
            value: "",
            Help:
              "\n\t\t\t\tThe users can also inquire the battery status of the unit by sending\n\t\t\t\tBATTERY_GET command via Z-Wave Controller. Once the unit receives the\n\t\t\t\tcommand, it will return BATTERY_REPORT command. The unit will send\n\t\t\t\tBattery_Level = 255 (0xFF) command to the Z-Wave Controller to inform that\n\t\t\t\tthe unit is in low battery status.\n\t\t\t",
          },
        ],
        Compatibility: "",
      },
      {
        id: "132",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "system",
            index: "0",
            instance: "1",
            label: "Wake-up Interval",
            max: "1005696000",
            min: "60",
            read_only: "false",
            type: "int",
            units: "Seconds",
            value: "",
            write_only: "false",
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Alarm Reports", max_associations: "1" },
              { index: "2", label: "Basic level", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

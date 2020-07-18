import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1002:0C02",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgsd002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1273/",
            id: "1002",
            name: "ZWProductPage",
            type: "0C02",
          },
          {
            text:
              "1) Install the battery. Visual indicator will signal the Z-Wave network adding status (green - device added, red - device not added).\n2) Make sure the device is located within direct range of the Z-Wave controller.\n3) Set the main controller in add mode (see main controller’s operating manual).\n4) Quickly, triple click the B-button, located on FIBARO Smoke Sensor enclosure.\n5) FIBARO Smoke Sensor will be detected and added to the Z-Wave network.",
            name: "InclusionDescription",
          },
          {
            text:
              "Please use this procedure only in the event that the system primary controller is missing or otherwise inoperable.\nFIBARO Smoke Sensor reset procedure:\n1) Make sure the device is powered.\n2) Press and hold the B-button for 3 seconds. Visual indicator will glow white.\n3) You will hear a short signal.\n4) Release the B-button.",
            name: "ResetDescription",
          },
          { text: "FGSD-002", id: "1002", name: "Identifier", type: "0C02" },
          {
            text:
              "The FIBARO Smoke Sensor is a universal, ultra-light, perfectly designed, optical Z-Wave smoke detector. Fire alarm is signalled by sound, visual indicator blinking and alarm reports sent to the other devices within Z-wave network. The optical sensor detects smoke at an early stage of fire, often before flames appear and temperature starts to rise significantly. Moreover, the device has a built-in temperature sensor, which is adjustable to allow detection of fire by exceeding given temperature threshold. The FIBARO Smoke Sensor is a battery powered device designed to be placed on the wall or ceiling. Visual indicator signals fire, operating mode and it is used to check if the device is within the Z-wave network using a built-in Z-Wave range tester. The Smoke Sensor is designed to operate in confined spaces, under normal conditions (lacking of smoke, dust or condensed water vapor).\n\nProduct video: \nhttps://www.youtube.com/watch?v=50QGfkdUtns",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2837/FGSD-002-EN-A-v1.1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The Smoke Sensor will wake up at defined time interval and will ALWAYS try to communicate with the main controller.  There is a possibility to wake the device up manually by triple-clicking the B-button.",
            name: "WakeupDescription",
          },
          { text: "FIBARO Smoke Sensor", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1002",
            name: "FrequencyName",
            type: "0C02",
          },
          {
            text:
              "1) Make sure there is a battery installed.\n2) Set the main controller in remove mode (see main controller’s operating manual).\n3) Quickly, triple click the B-button, located on FIBARO Smoke Sensor enclosure.",
            name: "ExclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2837/",
            id: "1003",
            name: "ZWProductPage",
            type: "0C02",
          },
          { text: "FGSD-002", id: "1003", name: "Identifier", type: "0C02" },
          {
            text: "CEPT (Europe)",
            id: "1003",
            name: "FrequencyName",
            type: "0C02",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1273/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2837/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text: "Updated Text for parameter 12",
                author: "J van Berlo - jvberlo@hotmail.com",
                date: "22 Mar 2020",
                revision: 7,
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
            label: "Fibaro Smoke Sensor sensitivity",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "There are 3 levels of sensitivity to smoke presence. Level 1 means the highest sensitivity. Rising the parameter value lowers the sensitivity to smoke presence.",
            Item: [
              { label: "HIGH Sensitivity", value: "1" },
              { label: "MEDIUM Sensitivity", value: "2" },
              { label: "LOW Sensitivity", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Z-Wave notifications status",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to activate excess temperature and/or enclosure opening notifications sent to the main controller.",
            Item: [
              { label: "all notifications disabled", value: "0" },
              { label: "enclosure opening notification enabled", value: "1" },
              {
                label: "exceeding temperature threshold notification enabled",
                value: "2",
              },
              { label: "all notifications enabled", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Visual indicator notifications status",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to activate visual indications but does not apply to major alarms, such as FIRE, TROUBLE and LOW BATTERY ALARM.",
            Item: [
              { label: "all notifications disabled", value: "0" },
              { label: "enclosure opening notification enabled", value: "1" },
              {
                label: "exceeding temperature threshold notification enabled",
                value: "2",
              },
              {
                label:
                  "enclosure opening and exceeding temperature threshold notifications enabled",
                value: "3",
              },
              { label: "lack of Z-Wave range notification", value: "4" },
              {
                label:
                  "enclosure opening and lack of Z-Wave range notifications enabled",
                value: "5",
              },
              {
                label:
                  "exceeding temperature threshold and lack of Z-Wave range notifications enabled",
                value: "6",
              },
              { label: "all notifications enabled", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Sound notifications status",
            max: "7",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to activate sound signals but does not apply to major alarms, such as FIRE, TROUBLE and LOW BATTERY ALARM.",
            Item: [
              { label: "all notifications disabled", value: "0" },
              { label: "enclosure opening notification enabled", value: "1" },
              {
                label: "exceeding temperature threshold notification enabled",
                value: "2",
              },
              {
                label:
                  "enclosure opening and exceeding temperature threshold notifications enabled",
                value: "3",
              },
              { label: "lack of Z-Wave range notification", value: "4" },
              {
                label:
                  "enclosure opening and lack of Z-Wave range notifications enabled",
                value: "5",
              },
              {
                label:
                  "exceeding temperature threshold and lack of Z-Wave range notifications enabled",
                value: "6",
              },
              { label: "all notifications enabled", value: "7" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Configuration of control frames in BASIC command class",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines which frames will be sent in the 2-nd Association Group (FIRE ALARM).",
            Item: [
              { label: "BASIC ON - BASIC OFF enabled", value: "0" },
              { label: "BASIC ON enabled", value: "1" },
              { label: "BASIC OFF enabled", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "BASIC ON frame value",
            max: "255",
            min: "0",
            type: "byte",
            value: "255",
            Help:
              "BASIC ON frame is sent in case of smoke presence detection and FIRE ALARM triggering. Available settings: 0,(1 - 99) or 255. Default setting: 255",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "BASIC OFF frame value",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "BASIC OFF frame is sent in case of FIRE ALARM cancellation. Available settings: 0,(1 - 99) or 255. Default setting: 0",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Alarm broadcast",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "A value other than 0 means that alarms are being sent in broadcast mode, i.e. to all devices within a Fibaro Smoke Sensor's range.",
            Item: [
              { label: "Broadcasts INACTIVE", value: "0" },
              { label: "Smoke ACTIVE, tamper INACTIVE", value: "1" },
              { label: "Smoke INACTIVE, tamper ACTIVE", value: "2" },
              { label: "Smoke ACTIVE, tamper ACTIVE", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This parameter defines how commands are sent in specified association groups: as secure or non-secure. Parameter is active only in Z-Wave network security mode. It doesn't apply to 1st Lifeline group.\n\t\t\t\tAvailable settings: 0 - 15\n\t\t\t\t0 - all groups sent as non-secure\n\t\t\t\t1 - 2nd group sent as secure\n\t\t\t\t2 - 3rd group sent as secure\n\t\t\t\t4 - 4th group sent as secure\n\t\t\t\t8 - 5th group sent as secure\n\t\t\t\tParameter values may be combined, e.g. 1+2=3 means that 2nd and 3rd group are sent as secure.\n\t\t\t\tDefault setting: 15 (all groups sent as secure)",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Temperature report interval",
            max: "8640",
            min: "0",
            type: "short",
            value: "1",
            Help:
              "Time interval between consecutive temperature reports. Report is sent when new temperature value is different from the one previously reported - according to the set hysteresis (parameter 21). Available settings: 0,1-8640 (multiply by 10 seconds) [10s-24h]. Default setting: 1 (10s)",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Temperature report hysteresis",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "The temperature report will only be sent if there is a difference in temperature value from the previous value reported, defined in this parameter (hysteresis). Available settings: 1 to 100 (in 0,1C steps). Default setting: 10 (1C)",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Temperature threshold",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            value: "55",
            Help:
              "Temperature value measured by the built-in temperature sensor above which the excess temperature notification is sent. Available settings: 1 to 100. Default setting: 55 (55C)",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Excess temperature signaling interval",
            max: "8640",
            min: "1",
            size: "2",
            type: "short",
            value: "1",
            Help:
              "Time interval of signaling (visual indication/sound) excess temperature level. Available settings: 1 to 8640 (multiply by 10 seconds) [10s-24h]. Default setting: 1 (10s)",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Lack of Z-Wave range indication interval",
            max: "8640",
            min: "1",
            size: "2",
            type: "short",
            value: "180",
            Help:
              "Time interval of signaling (visual indication/sound) lack of Z-Wave range. Available settings: 1 to 8640 (multiply by 10 seconds) [10s-24h]. Default setting: 180 (30min)",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Fire Alarm", max_associations: "5" },
              { index: "3", label: "Tamper", max_associations: "5" },
              {
                auto: "true",
                index: "4",
                label: "Fire Alarm Report",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "5",
                label: "Tamper Report",
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

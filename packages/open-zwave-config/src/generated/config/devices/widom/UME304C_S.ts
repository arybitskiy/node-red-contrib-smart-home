import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0149:0304:1214",
            name: "OzwInfoPage",
          },
          { text: "images/widom/UME304C_S.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1283/",
            id: "0304",
            name: "ZWProductPage",
            type: "1214",
          },
          {
            text:
              "Press the push button (B)  located on the top of the device six consecutive times within one minute from system start-up. Please use this procedure only in the event that the primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The smallest device in its category worldwide, and the only device specifically intended for use both as a Relay Switch with integrated power meter, and as an Energy Meter either at the point of entry of your electrical system, or on a section of the latter. Available in two versions, version S featuring an internal shunt resistor, and version C featuring an external current transformer, it is capable of measuring loads exceeding 10 KW. In addition to Power measurements, the device also provides data for Energy, Voltage, Current and Power factor.\nThe only device suited for use with all types of Z-Wave controller, and capable of implementing an active energy-saving management policy defined by the user according to his energy consumption, or to the amount of energy produced by his solar power system. It automatically connects and disconnects a specific load if the threshold limit is exceeded, or “supplies” the required power, momentarily excluding non-priority loads.\nMain Feature:\n•\tActive Energy-saving Management\n•\tControl and monitoring of usage\n•\tControl and monitoring of production and net metering\n•\tMonitoring of all network parameters (Power, Energy, Voltage, Current, Power Factor)\n•\tProvides bidirectional measurements for Power and Energy (produced/consumed). \n•\tManagement and prevention of electrical faults\n•\tIntelligent Opening/Closing of the Relay\n•\tControl of heavy loads\n•\tSoftware Update\n•\tExtremely low energy usage",
            name: "Description",
          },
          {
            text:
              '1. Put your system controller into inclusion mode by following the instructions provided by your controller manufacturer.\n2. Press the push button (B)  located on the top of the device once."',
            name: "InclusionDescription",
          },
          {
            text:
              '1. Put your system controller into exclusion mode by following the instructions provided by your controller manufacturer.\n2. Press the push button (B)  located on the top of the device three time."',
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1283/WiDom Energy Driven Switch - EN.pdf",
            name: "ProductManual",
          },
          { text: "Energy Driven Switch Version S", name: "Name" },
          { text: "WPM1.04C", id: "0304", name: "Identifier", type: "1214" },
          {
            text: "CEPT (Europe)",
            id: "0304",
            name: "FrequencyName",
            type: "1214",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1264/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1283/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
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
            label: "Device status 1 click",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when the external switch receives 1 click",
            Item: [
              { label: "Toggle (default)", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Device status Basic Set",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when ZWave command Basic Set is received",
            Item: [
              { label: "As Received (default)", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Overcurrent level",
            max: "4500",
            min: "0",
            size: "2",
            type: "short",
            units: "centiAmperes",
            value: "4500",
            Help:
              "C VERSION. Sets the current level above which the time spent above that level is measured. For S VERSION. Sets to 1250 the default and max current level above which the time spent above that level is measured  (Hundredths of Amperes)",
          },
          {
            genre: "config",
            index: "31",
            label: "Overcurrent time",
            max: "10800",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "10",
            Help:
              "Sets the time beyond which, in the case of overcurrent at a level higher than that established in parameter 30, an OverCurrent event occurs (seconds)",
          },
          {
            genre: "config",
            index: "32",
            label: "Next state",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines the next state of the device if an overcurrent event has occurred.",
            Item: [
              { label: "Ignore", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Toggle", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "Meter reset",
            max: "4294967296",
            min: "0",
            size: "4",
            type: "int",
            value: "1",
            Help:
              "Provides total operating time from last meter reset. When set to 0 it resets the cumulated values of energy and total operating time.",
          },
          {
            genre: "config",
            index: "34",
            label: "Energy flow",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Determines whether energy events are related to energy consumed or energy produced",
            Item: [
              { label: "Consumed", value: "1" },
              { label: "Produced", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "35",
            label: "UP Power Level",
            max: "11250",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "11250",
            Help:
              "C VERSION. Sets the level of instantaneous power in Watts beyond which time of permanence above this level is calculated. For S VERSION. Sets to 3000 the default and max level of instantaneous power in Watts beyond which time of permanence above this level is calculated.",
          },
          {
            genre: "config",
            index: "36",
            label: "UP Power Time",
            max: "10800",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "10",
            Help:
              "Sets the time in seconds beyond which, if instantaneous power remains at levels exceeding threshold defined by parameter 35, a UP Power event occurs.",
          },
          {
            genre: "config",
            index: "37",
            label: "UP Power State",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the next state of the device if an overcurrent event has occurred.",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Toggle", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "38",
            label: "UP Power Associated",
            max: "99",
            min: "-1",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "Defines the status of associated devices in the presence of a UP Power event. From: 1 to 99 for dimming purpose. .0 (OFF) and -1(ON) for switching ON/OFF",
          },
          {
            genre: "config",
            index: "39",
            label: "DOWN Power Level",
            max: "11250",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "0",
            Help:
              "Sets the level of instantaneous power in Watts beyond which time of permanence below this level is calculated.",
          },
          {
            genre: "config",
            index: "40",
            label: "DOWN Power Time",
            max: "10800",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "10",
            Help:
              "Sets the time in seconds beyond which, if instantaneous power remains at levels below threshold defined by parameter 39, a DOWN Power event occurs.",
          },
          {
            genre: "config",
            index: "41",
            label: "DOWN Power State",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the next state of the device in the case of a DOWN Power event occurring.",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Toggle", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "DOWN Power Associated",
            max: "99",
            min: "-1",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "Defines the status of associated devices in the presence of a DOWN Power event. From: 1 to 99 for dimming purpose.  0 (OFF) and -1(ON) for switching ON/OFF.",
          },
          {
            genre: "config",
            index: "43",
            label: "Energy Level",
            max: "4294967296",
            min: "0",
            size: "4",
            type: "int",
            units: "kWh",
            value: "2000000",
            Help:
              "the energy level that once exceeded an Energy Limit event occurs. From 0 to 2.000.000 KWh   Default value: 2.000.000 KWh",
          },
          {
            genre: "config",
            index: "44",
            label: "Energy Limit State",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the next state of the device in the case of an Energy Limit event occurs",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Toggle", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "45",
            label: "Variation Instantaneous Power",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Defines the percentage variation of instantaneous power determining the sending of the report.(Default: 10%)",
          },
          {
            genre: "config",
            index: "46",
            label: "Report Time Frequency",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "10",
            Help:
              "Defines the maximum time in minutes since the previous report beyond which an Instantaneous Power Report will still be sent. (Default: 10 minutes)",
          },
          {
            genre: "config",
            index: "47",
            label: "Variation Total Energy",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "Defines the increase of total energy required to generate a report listing the level of total energy to the devices associated to the Energy Notification Group.",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "thousandth of kWh", value: "1" },
              { label: "hundredth of kWh", value: "2" },
              { label: "tenth of kWh", value: "3" },
              { label: "kWh", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "48",
            label: "Nominal Voltage",
            max: "2500",
            min: "1100",
            size: "2",
            type: "short",
            units: "deciVolts",
            value: "2300",
            Help:
              "Defines the nominal voltage value in tenths of volts. Together with parameter No. 49 this is used by the automatic notification system to send reports on variations of voltage.",
          },
          {
            genre: "config",
            index: "49",
            label: "Fall in maximum voltage",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Defines, as a percentage, the nominal value for permitted fall in maximum voltage.(default 10%)",
          },
          {
            genre: "config",
            index: "50",
            label: "Electric parameters subjected to automatic notification",
            max: "62",
            min: "0",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n                          Defines which electric parameters, other than power, will be subjected to automatic notification. The value to be set for this parameter must be calculated as the sum of values associated to the individual electric parameter indicated in the table.(default 30)\n                          Byte 1 : Bit 7: reserved;\n                                          Bit 6:reserved;\n                                          Bit 5: Multilevel Sensor: Power Report;\n                                          Bit 4: Power factor;\n                                          Bit 3: Current;\n                                          Bit 2: Voltage;\n                                          Bit 1: Energy;\n                                          Bit 0: Power;\n                        ",
          },
          {
            genre: "config",
            index: "51",
            label: "Voltage RMS value",
            read_only: "true",
            size: "2",
            type: "short",
            units: "deciVolts",
            Help:
              "Returns the value of voltage RMS at the time of the reading expressed in tenths of Volts..",
          },
          {
            genre: "config",
            index: "52",
            label: "Current RMS value",
            read_only: "true",
            size: "2",
            type: "short",
            units: "centiAmperes",
            Help:
              "Returns the value of current RMS expressed in hundredths of Amperes.",
          },
          {
            genre: "config",
            index: "53",
            label: "Power Factor",
            read_only: "true",
            size: "1",
            type: "byte",
            units: "%",
            Help: "Returns the value of power factor as a percentage.",
          },
          {
            genre: "config",
            index: "54",
            label: "Total energy consumed",
            read_only: "true",
            size: "4",
            type: "int",
            units: "Wh",
            Help:
              "Returns the value of total energy consumed expressed in Wh (thousandths of KWh).",
          },
          {
            genre: "config",
            index: "55",
            label: "Total energy produced",
            read_only: "true",
            size: "4",
            type: "int",
            units: "Wh",
            Help:
              "Returns the value of total energy produced expressed in Wh (thousandths of KWh).",
          },
          {
            genre: "config",
            index: "60",
            label: "Start-up status",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "Defines the status of the device following a restart(default 3)",
            Item: [
              { label: "ON", value: "1" },
              { label: "OFF", value: "2" },
              { label: "Previous status", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "61",
            label: "Configuration reset",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help:
              "Defines which parameters should be reset to default values.(default 4)",
            Item: [
              { label: "Factory reset", value: "0" },
              { label: "Association reset", value: "1" },
              { label: "Configuration reset", value: "2" },
              { label: "ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "62",
            label: "Type of external switch",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help:
              "Defines the type of external switch connected to the device.(default 4)",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "button", value: "1" },
              { label: "switch", value: "2" },
              { label: "Automatic recognition", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "63",
            label: "Load control",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Defines the load control mode.(default 1)",
            Item: [
              { label: "Direct control", value: "1" },
              { label: "Contactor (normally open)", value: "2" },
              { label: "Contactor (normally closed)", value: "3" },
              { label: "As external indicator", value: "4" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label:
                  "Devices to receive notifications on: status changes; energy and power levels; device local reset",
                max_associations: "8",
              },
              {
                index: "2",
                label: "Devices controlled by the Up Power event",
                max_associations: "8",
              },
              {
                index: "3",
                label: "Devices controlled by the Down Power event",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

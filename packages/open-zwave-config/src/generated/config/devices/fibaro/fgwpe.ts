import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0600",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgwpe.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/993/",
            id: "1000",
            name: "ZWProductPage",
            type: "0600",
          },
          { text: "FIBARO Wall Plug", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0600",
          },
          {
            text:
              "http://www.fibaro.com/manuals/en/FGWPE_F-101-Wall-Plug/FGWPE_F-101-Wall-Plug-en-2.1-2.3.pdf",
            name: "ProductSupport",
          },
          { text: "FGWPE/F-101", id: "1000", name: "Identifier", type: "0600" },
          {
            text:
              "Fibaro Wall Plug is a universal, Z-Wave compatible, relay switch in \nthe form of a socket adapter. The Plug may be used to operate any \ndevice up to 2,500W power output. The Plug features power \nconsumption measuring and uses a crystal LED ring to visualize the \ncurrent load by color changing illumination.\nFibaro Wall Plug may be operated using the service button located \non its casing, or via any Z-Wave compatible controller.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/993/xml",
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
      { action: "remove", id: "113" },
      { action: "remove", id: "156" },
      { action: "remove", id: "39" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Always on function",
            size: "1",
            type: "list",
            value: "1",
            Help:
              'Once activated, Wall Plug will keep a connected device constantly ON, will stop reacting to alarm frames and B-button push. "Always on" function turns the Plug into a power and energy meter. Also, connected device will not be turned off upon receiving an alarm frame from another Z-Wave device (parameter 35 will be ignored). In "Always on" mode, connected device may be turned off only after user defined power has been exceeded (parameter 70). In such a case, connected device can be turned on again by pushing the B-button or sending a control frame. By default, overload protection is inactive. Default setting: 1',
            Item: [
              { label: "function activated", value: "0" },
              { label: "function inactive", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Remember device status after power failure",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Define how will the Plug react after the power supply is back on. Default setting: 1",
            Item: [
              {
                label:
                  "Wall Plug does not memorize its state after a power failure",
                value: "0",
              },
              {
                label: "Wall Plug memorizes its state after a power failure",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Reaction to alarms",
            max: "63",
            min: "1",
            size: "1",
            type: "list",
            value: "63",
            Help:
              "Type of transmitted control frame for association group 1, activated via input IN1. The parameter allows to specify the type of alarm frame or to force transmission of control commands (BASIC_SET)",
            Item: [
              { label: "ALARM GENERIC", value: "1" },
              { label: "ALARM SMOKE", value: "2" },
              { label: "ALARM CO", value: "4" },
              { label: "ALARM CO2", value: "8" },
              { label: "ALARM HEAT", value: "16" },
              { label: "ALARM WATER", value: "32" },
              { label: "ALARM ALL", value: "63" },
            ],
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Wall Plug's response to alarm frames",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Parameter defines how the Wall Plug will respond to alarms (device's status change) Default setting: 0. 0 - no reaction, 1 - turn on connected device. LED ring signals an alarm through defined time period (parameter 39) or until the alarm is cancelled. 2 - turn off connected device. LED ring signals an alarm through defined time period (parameter 39) or until the alarm is cancelled. 3 - cyclically change device state, each 1second. In alarm mode Wall Plug does not report status change, power changes, ignores alarm frames. After the defined time period has passed (parameter 39) or after the alarm cancellation, connected device is set to the previous state. NOTE: If \"always on\" function is active (parameter 1), this parameter's settings are ignored.",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Turn on connected device", value: "1" },
              { label: "Turn off connected device", value: "2" },
              {
                label: "Cyclically change device state, each 1second",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "Alarm duration",
            max: "65536",
            min: "1",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "Wall Plug's alarm mode duration. If a device sending an alarm frame through the Z-Wave network sets alarm duration as well, this parameter's settings are ignored. Default setting: 600",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Immediate power report",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "80",
            Help:
              "Parameter defines by how much power load must change, in percents, to be reported to the main controller, with the highest priority in the Z-Wave network. By default, Fibaro Wall Plug immediately sends power report if the power load changes by 80%. Default setting: 80 (%)",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Standard power load reporting",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "Parameter defines by how much power load must change, in percents, to be reported to the main controller. By default, Fibaro Wall Plug sends power report if the power load changes by 15%.  By default such changes in power load may be reported up to 5 times per 30 seconds. Wall Plug sends 5 reports during time period specified in paramater 43. Default setting: 15 (%)",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Power reporting frequency",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "This parameter defines how frequently standard power reports (parameter 42) will be sent. By default Wall Plug sends up to 5 reports each 30 seconds, provided the power load changes by 15%.  Default setting: 30 (s)",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Reporting changes in energy consumed by controlled devices",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "New, reported energy value is calculated based on last reported value. Default setting: 10 (0,1 kWh). Available settings: 1 - 254 (0,01kWh - 2,54kWh). Value of 255 - changes in consumed energy will not be reported. Reports will be sent only in case of polling. Default Setting: 10 (0,1 kWh)",
          },
          {
            genre: "config",
            index: "47",
            instance: "1",
            label:
              "Time period between reports on power load and energy consumption.",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "Parameter defines time period between reports sent when changes in power load have not been recorded. By default, if power load changes have not been recorded, reports are sent every hour.  Default setting: 3 600 (s), Available settings: 1 - 65534 (s). Value of 65535 - no periodic reports. Reports will be sent only in case of power load / energy consumption changes (parameters 40, 42, 43,45) or in case of polling. Default setting: 3600",
          },
          {
            genre: "config",
            index: "49",
            instance: "1",
            label: "Metering energy consumed by the Wall Plug itself",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines whether energy metering should include the amount of energy consumed by the Wall Plug itself. Results are being added to energy consumed by controlled device. Default setting: 0",
            Item: [
              { label: "function inactive", value: "0" },
              { label: "function activated", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "DOWN value",
            max: "25000",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "Lower power threshold, used in parameter 52. Default setting: 300 (30W) Available settings: 0 - 25000 (0,0W - 2500W) DOWN value cannot be higher than a value specified in parameter 51. Default setting: 300 (30W)",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "UP value",
            max: "25000",
            min: "1",
            size: "2",
            type: "short",
            value: "500",
            Help:
              "Upper power threshold, used in parameter 52. Default setting: 500 (50W) Available settings: 1 - 25000 (0,1W - 2500W) UP value cannot be lower than a value specified in parameter 50. Default setting: 500 (50W)",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Action in case of exceeding defined power values",
            size: "1",
            type: "list",
            value: "6",
            Help:
              "Parameter deifines the way 2nd association group devices are controlled, depending on the current power load.  Default setting: 6. Available settings: 0 - function inactive, 1 - turn the associated devices on, once the power drops below DOWN value (parameter 50), 2 - turn the associated devices off, once the power drops below DOWN value (parameter 50), 3 - turn the associated devices on, once the power rises above UP value (parameter 51), 4 - turn the associated devices off, once the power rises above UP value (parameter 51), 5 - 1 and 4 combined. Turn the associated devices on, once the power drops below DOWN value (parameter 50). Turn the associated devices off, once the power rises above UP value (parameter 51).  6 - 2 and 3 combined. Turn the associated devices off, once the power drops below DOWN value (parameter 50). Turn the associated devices on, once the power rises above UP value (parameter 51). Default setting: 6",
            Item: [
              { label: "Function inactive", value: "0" },
              {
                label: "Turn the associated devices on,Power below DOWN",
                value: "1",
              },
              {
                label: "Turn the associated devices off,Power below DOWN",
                value: "2",
              },
              {
                label: "Turn the associated devices on,Power above UP",
                value: "3",
              },
              {
                label: "Turn the associated devices off,Power above UP",
                value: "4",
              },
              { label: "1 and 4 combine", value: "5" },
              { label: "2 and 3 combined", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label:
              "Power load, which when exceeded, makes the LED ring flash violet.",
            max: "32000",
            min: "1000",
            size: "2",
            type: "short",
            value: "25000",
            Help:
              "Function is active only when parameter 61 is set to 0 or 1. Default setting: 25000 (2500W) Available settings: 1000 - 32000 (100W - 3200W). Default setting: 25000 (2500W)",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "LED ring illumination colour when controlled device is on",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "0 - LED ring illumination colour changes in predefined steps, depending on power consumption changes, 1 - LED ring illumination colour changes continuously, using full spectrum of available colours, depending on power consumption changes. 2 - White illumination, 3 - Red illumination, 4 - Green illumination, 5 - Blue illumination, 6 - Yellow illumination, 7 - Cyan illumination, 8 - Magenta illumination, 9 - illumination turned off completely. Default setting: 1",
            Item: [
              { label: "Depending on power consumption changes", value: "0" },
              { label: "Using full spectrum of available colours", value: "1" },
              { label: "White illumination", value: "2" },
              { label: "Red illumination", value: "3" },
              { label: "Green illumination", value: "4" },
              { label: "Blue illumination", value: "5" },
              { label: "Yellow illumination", value: "6" },
              { label: "Cyan illumination", value: "7" },
              { label: "Magenta illumination", value: "8" },
              { label: "illumination turned off completely", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "LED ring illumination colour when controlled device is off",
            size: "1",
            type: "list",
            value: "8",
            Help:
              "0 - LED ring illumination colour takes on the color corresponding to the last measured power at the time when the device controlled was turn off, 1 - White illumination, 2 - Red illumination, 3 - Green illumination, 4 - Blue illumination, 5 - Yellow illumination, 6 - Cyan illumination, 7 - Magenta illumination, 8 - illumination turned off completely. Default setting: 8",
            Item: [
              { label: "Depending on the last measured power", value: "0" },
              { label: "White illumination", value: "1" },
              { label: "Red illumination", value: "2" },
              { label: "Green illumination", value: "3" },
              { label: "Blue illumination", value: "4" },
              { label: "Yellow illumination", value: "5" },
              { label: "Cyan illumination", value: "6" },
              { label: "Magenta illumination", value: "7" },
              { label: "illumination turned off completely", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label:
              "LED ring illumination colour at the Z-Wave network alarm detection. ",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "0 - No change in colour. LED ring illumination colour determined by parameters 61 or 62 settings, 1 - LED ring flashes red / blue / white (default), 2 - White illumination, 3 - Red illumination, 4 - Green illumination, 5 - Blue illumination, 6 - Yellow illumination, 7 - Cyan illumination, 8 - Magenta illumination, 9 - illumination turned off completely. Default setting: 1",
            Item: [
              { label: "No change in colour", value: "0" },
              { label: "LED ring flashes red / blue / white", value: "1" },
              { label: "White illumination", value: "2" },
              { label: "Red illumination", value: "3" },
              { label: "Green illumination", value: "4" },
              { label: "Blue illumination", value: "5" },
              { label: "Yellow illumination", value: "6" },
              { label: "Cyan illumination", value: "7" },
              { label: "Magenta illumination", value: "8" },
              { label: "illumination turned off completely", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Overload safety switch",
            size: "2",
            type: "short",
            value: "65535",
            Help:
              'This function allows for turning off the controlled device in case of exceeding the defined power. Controlled device will be turned off even if "always on" function is active (parameter 1). Controlled device can be turned back on via B-button or sending a control frame. By default this function is inactive.  Default setting: 65535 (6553,5W) Available settings: 10 - 65535 (1W - 6553,5W).  Value higher than 32000 (3200W) turns the overload safety switch off, i.e. this functionality is turned off by default. Default setting: 65535 (6553,5W)',
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
                auto: "false",
                index: "1",
                label: "Retransmit Switch status",
                max_associations: "16",
              },
              { index: "2", label: "Exceeding power", max_associations: "16" },
              {
                auto: "true",
                index: "3",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

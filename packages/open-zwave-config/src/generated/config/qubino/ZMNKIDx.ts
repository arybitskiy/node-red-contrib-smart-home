import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Input I1 switch type",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tWith this parameter, you can select between push-button (momentary) and on/off toggle switch types.\n\t\t\t\tDefault value: 1.\n\t\t\t",
            Item: [
              { label: "push-button (momentary)", value: "0" },
              { label: "on/off toggle switch", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Input 1 contact type",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tThis parameter determines how the switch or push-button is connected.\n\t\t\t\tDefault value: 0.\n\t\t\t",
            Item: [
              { label: "NO (normally open) input type", value: "0" },
              { label: "NC (normally close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Watt Power Consumption Reporting Threshold for Q Load ",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n                Choose by how much power consumption needs to increase or decrease to be reported. Values correspond to percentages so if 10 is set, for example, the device will report any power consumption changes of 10% or more compared to the last reading. \n\t\t\t\tValues (size is 1 byte dec):\n\t\t\t\t\tdefault value 10 \n\t\t\t\t\t0 - Power consumption reporting disabled \n\t\t\t\t\t1 - 100 = 1% - 100% Power consumption reporting enabled. New value is reported only when Wattage in real time changes by more than the percentage value set in this parameter compared to the previous Wattage reading, starting at 1% (the lowest value possible).\n\t\t\t\tNOTE: Power consumption needs to increase or decrease by at least 1 Watt to be reported, REGARDLESS of percentage set in this parameter.  \n\t\t\t",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Watt Power Consumption Reporting Time Threshold for Q",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Set value refers to the time interval with which power consumption in Watts is reported (30 - 32767 seconds). If for example 300 is entered, energy consumption reports will be sent to the gateway (hub) every 300 seconds (or 5 minutes).\n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tdefault value 0 (power report is disabled)\n\t\t\t\t\t0 - Power consumption reporting disabled\n\t\t\t\t\t30 - 32767 = 30 - 32767 seconds. Power consumption reporting enabled. Report is sent according to time interval (value) set here. \n\t\t\t",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Hysteresis Upper temperature offset",
            max: "450",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "\n                This parameter defines minimum temperature difference between real measured temperature and set-point temperature to turn device on in heat mode or turn device off in cool mode.\n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tdefault value 5 (0.5 C)\n\t\t\t\t\t0 - 450\n\t\t\t\tNOTE1: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is 0 - 250 (0.0 C - 25.0 C, resolution 0.1 C)\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 0 - 450 (0.0 F - 45.0 F, resolution 0.1 F)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t",
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Hysteresis Lower temperature offset",
            max: "450",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "\n                This parameter defines minimum temperature difference between real measured temperature and set-point temperature to turn device off in heat mode or turn device on in cool mode.\n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tdefault value 5 (0.5 C)\n\t\t\t\t\t0 - 450\n\t\t\t\tNOTE1: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is 0 - 250 (0.0 C - 25.0 C, resolution 0.1 C)\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 0 - 450 (0.0 F - 45.0 F, resolution 0.1 F)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Antifreeze",
            max: "1000",
            min: "-125",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "\n\t\t\t\tSet value determines at which temperature the device will be turned on even (if the thermostat was manually set to off). \n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tdefault value 50 (5.0 C)\n\t\t\t\t\t-125 - 545\n\t\t\t\t\t1000 - Antifreeze functionality disabled\n\t\t\t\tNOTE1: Antifreeze is activated only in heating mode and it uses hysteresis of +-0.5C. \n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is -125 - 125 (-12.5 C - 12.5 C, resolution 0.1 C)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 95 - 545 (9.5 F - 54.5 F, resolution 0.1 F)\n\t\t\t\tNOTE4: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t",
          },
          {
            genre: "config",
            index: "59",
            instance: "1",
            label: "Thermostat mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter determines how the switch or push-button is connected.\n\t\t\t\tDefault value: 0.\n\t\t\t",
            Item: [
              { label: "Heat mode", value: "0" },
              { label: "Cool mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Too low temperature limit",
            max: "2120",
            min: "-150",
            size: "2",
            type: "short",
            value: "50",
            Help:
              "\n\t\t\t\tThis parameter determines the temperature at which the device sends a command to the associated device - to turn ON device or to turn OFF device.\n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tDefault value 50 (Too low temperature limit is 5.0 C)\n\t\t\t\t\t-150 - 2120\n\t\t\t\tNOTE1: Too low temperature limit is used with Association Group 3.\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is -150 - 1000 (-15.0 C - 100.0 C, resolution 0.1 C)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 50 - 2120 (5.0 F - 212.0 F, resolution 0.1 F)\n\t\t\t\tNOTE4: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Too high temperature limit",
            max: "2120",
            min: "1",
            size: "2",
            type: "short",
            value: "700",
            Help:
              "\n\t\t\t\tThis parameter determines the temperature at which the device sends a command to the associated device, to turn ON device or to turn OFF device.\n\t\t\t\tValues (size is 2 byte dec):\n\t\t\t\t\tdefault value 700 (too high temperature limit is 70.0 C)\n\t\t\t\t\t1 - 2120\n\t\t\t\tNOTE1: Too high temperature limit is used with Association Group 3.\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is 1 - 1000 (0.1 C - 100.0 C, resolution 0.1 C)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 322 - 2120 (32.2 F - 212.0 F, resolution 0.1 F)\n\t\t\t\tNOTE4: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Output switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tSet value determines the type of the device connected to the on/off output. The output type can be normally open (NO) or normally closed (NC). \n\t\t\t\tDefault value: 0.\t\t\t\t\n\t\t\t",
            Item: [
              {
                label: "When switch/device is off the output is 0V (NC)",
                value: "0",
              },
              {
                label:
                  "When switch/device is off the output is 240V or 24V (NO)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "78",
            instance: "1",
            label: "Scale Selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter determines in which measurement unit the device will report temperature (Fahrenheit or Celsius) and determines the scale the configuration parameters (43, 44, 44, 45, 60, 61, 110, 120) are interpreted as.\n\t\t\t\tNOTE1: This scale has influence on Temperature reporting. The device is capable of receiving a Set point in all supported scales.\n\t\t\t\tNOTE2: This configuration parameter has impact on configuration parameters 43, 44, 44, 45, 60, 61, 110, 120. If scale is set to degrees Fahrenheit configuration values at parameters 43, 44, 44, 45, 60, 61, 110, 120 will be converted to degrees Celsius. Please note that converted values could drift when converting values back and forth.\n\t\t\t\tDefault value: 0.\n\t\t\t",
            Item: [
              { label: "degrees Celsius ", value: "0" },
              { label: "degrees Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature Sensor Offset Settings",
            max: "270",
            min: "-270",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tSet value is added to or subtracted from the actually measured value to adjust the temperature report sent by an external sensor.\n\t\t\t\tNOTE1: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is -150 - 150 (-15.0 C - 15.0 C, resolution 0.1 C)\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is -270 - 270 (-27.0 F - 27.0 F, resolution 0.1 F)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t\tDefault value: 0.\n\t\t\t",
          },
          {
            genre: "config",
            index: "120",
            instance: "1",
            label: "Temperature Sensor Reporting Threshold",
            max: "270",
            min: "0",
            size: "2",
            type: "short",
            value: "5",
            Help:
              "\n\t\t\t\tThis configuration parameters sets reporting threshold between reported temperature and actual temperature for reporting temperature at association group 4.\n\t\t\t\tNOTE1: If configuration parameter 78 (Scale selection) is set to Celsius, then valid interval is 0 - 150 (0 C - 15.0 C, resolution 0.1 C)\n\t\t\t\tNOTE2: If configuration parameter 78 (Scale selection) is set to Fahrenheit, then valid interval is 0 - 270 (0 F - 27.0 F, resolution 0.1 F)\n\t\t\t\tNOTE3: If configuration parameter 78 (Scale selection) is set to Fahrenheit, note that Fahrenheit values will be converted to Celsius degrees. Due to conversion algorithm please be advised that configuration value could drift when converting values back and forth.\n\t\t\t\tDefault value: 5.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Change of output Q",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Basic on/off too high too low T",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Sensor multilevel report",
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

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0005:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa005.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2898/",
            id: "0005",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "0005",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2919/TriSensor user manual 20180416.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Aeotec TriSensor is a universal Z-Wave Plus compatible product, consists of temperature, lighting and motion sensors, powered by a CR123A battery. It can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. By the built-in motion sensor, an alam will be sent to the gateway when the motion sensor is triggered.",
            name: "Description",
          },
          {
            text:
              "Press once TriSensor’s Action Button, the Purple LED will keep solid until whole network processing is complete. If the exclusion is successful, the LED will flash white -> green -\n>white -> green and then LED will pulse a blue. If failed, the yellow LED lasts for 30 seconds, then the green LED flashes once.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold the button at least 2s until Red Led is on and then release the button,device will send wakeup notification to controller if device is in a Z-Wave network.",
            name: "WakeupDescription",
          },
          { text: "ZWA005-C", id: "0005", name: "Identifier", type: "0002" },
          { text: "TriSensor", name: "Name" },
          {
            text:
              "Press once TriSensor’s Action Button. If it is the first installation, the yellow LED will keep solid until whole network processing is complete. If successful, the LED will flash white -> green -> white -> green, after 2 seconds finished. If failed, the yellow LED lasts for 30 seconds, then the green LED flashes once.\nIf it is the S2 encryption network, please enter the first 5 digits of DSK.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.\tPower up the device.\n2.\tPress and hold the button for 15s until Red Led is blinking,then release the button. Note: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2919/",
            id: "0005",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "ZWA005-A", id: "0005", name: "Identifier", type: "0102" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0005",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text: "https://products.z-wavealliance.org/products/2920/",
            id: "0005",
            name: "ZWProductPage",
            type: "0202",
          },
          { text: "ZWA005-B", id: "0005", name: "Identifier", type: "0202" },
          {
            text: "Australia / New Zealand",
            id: "0005",
            name: "FrequencyName",
            type: "0202",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2898/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2919/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2920/xml",
                author: "David Goodlad - david@goodlad.net",
                date: "28 Jul 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Motion Re-trigger Time",
            max: "32767",
            min: "0",
            type: "short",
            units: "Second",
            value: "30",
            Help:
              "\n                This parameter is configured the delay time before PIR sensor can be triggered again to reset motion timeout counter.\n\t\t\t\tValue = 0 will disable PIR sensor from triggering until motion timeout has finished.\n            ",
          },
          {
            genre: "config",
            index: "2",
            label: "Motion clear time",
            max: "32767",
            min: "1",
            type: "short",
            units: "Second",
            value: "240",
            Help:
              "\n                This configures the clear time when your motion sensor times out and sends a no motion status.\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Motion Sensitivity",
            max: "11",
            min: "0",
            size: "1",
            type: "list",
            value: "8",
            Help:
              "\n\t\t\t\tThis parameter is configured the sensitivity that motion detect.\n\t\t\t\t0  - PIR sensor disabled.\n\t\t\t\t1  - Lowest sensitivity.\n\t\t\t\t11 - Highest sensitivity.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
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
              { label: "11", value: "11" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Binary Sensor Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable sensor binary report when motion event is detected or cleared",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Disable BASIC_SET to Associated nodes",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter is configured the enabled or disabled send BASIC_SET command to nodes that associated in group 2 and group 3.",
            Item: [
              { label: "Disabled All Group Basic Set Command", value: "0" },
              { label: "Enabled Group 2", value: "1" },
              { label: "Enabled Group 3 ", value: "2" },
              { label: "Enabled Group 2 and Group 3", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Basic Set Value Settings for Group 2",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Define Basic Set Value  when motion event is triggered and / or cleared",
            Item: [
              {
                label:
                  "0xFF when motion is triggered and 0x00 when motion is cleared",
                value: "0",
              },
              {
                label:
                  "0x00 when motion is triggered and 0xFF when motion is cleared",
                value: "1",
              },
              { label: "0xFF when motion is triggered", value: "2" },
              { label: "0x00 when motion is triggered", value: "3" },
              { label: "0x00 when motion event is cleared", value: "4" },
              { label: "0xFF when motion event is cleared", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Temperature Alarm Value",
            type: "short",
            units: "0.1",
            value: "239",
            Help:
              "\n                This parameter is configured the threshold value that alarm level for temperature.\n\t\t\t\tWhen the current ambient temperature value is larger than this configuration value, device will send a BASIC_SET = 0xFF to nodes associated in group 3.\n\t\t\t\tIf current temperature value is less than this value, device will send a BASIC_SET = 0x00 to nodes associated in group 3.\n\t\t\t\tValue = [Value] x 0.1(Celsius / Fahrenheit)\n\t\t\t\tAvailable Settings: -400 to 850 (40.0 to 85.0 Celsius) or -400 to 1185 (-40.0 to 118.5 Fahrenheit).\n\t\t\t\tDefault value: 239 (23.9 Celsius) or 750 (75.0 Fahrenheit)\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "LED over TriSensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tEnable or Disable LED over TriSensor\n\t\t\t\tThis completely disables all LED reaction regardless of Parameter 9 - 13 settings\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Motion report LED",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n\t\t\t\tThis setting changes the color of the LED when your TriSensor sends a motion report.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
              { label: "Pink", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Purple", value: "7" },
              { label: "Orange", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Temperature report LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis setting changes the color of the LED when your TriSensor sends a temperature report.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
              { label: "Pink", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Purple", value: "7" },
              { label: "Orange", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Light report LED",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis setting changes the color of the LED when your TriSensor sends a light report.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
              { label: "Pink", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Purple", value: "7" },
              { label: "Orange", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Battery report LED",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tIt is possible to change the color of what the LED blinks when your TriSensor sends a battery report.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
              { label: "Pink", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Purple", value: "7" },
              { label: "Orange", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Wakeup report LED",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis setting changes the color of the LED when your TriSensor sends a wakeup report.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
              { label: "Pink", value: "5" },
              { label: "Cyan", value: "6" },
              { label: "Purple", value: "7" },
              { label: "Orange", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Temperature Scale Setting",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tConfigure temperature sensor scale type, Temperature to report in Celsius or Fahrenheit\n\t\t\t",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "Temperature Threshold reporting",
            max: "250",
            min: "0",
            type: "short",
            units: "0.1",
            value: "20",
            Help:
              "\n                Change threshold value for change in temperature to induce an automatic report for temperature sensor.\n\t\t\t\tScale is identical setting in Parameter No.20.\n\t\t\t\t0-> Disable Threshold Report for Temperature Sensor.\n\t\t\t\tSetting of value 20 can be a change of -2.0 or +2.0 (C or F depending on Parameter No.20) to induce automatic report or setting a value of 2 will be a change of 0.2(C or F).\n\t\t\t\tAvailable Settings: 0 to 250.\n            ",
          },
          {
            genre: "config",
            index: "22",
            label: "Light intensity Threshold Value to Report",
            max: "10000",
            min: "0",
            type: "short",
            units: "Lux",
            value: "100",
            Help:
              "\n                Change threshold value for change in lux to induce an automatic report for light sensor.\n            ",
          },
          {
            genre: "config",
            index: "23",
            label: "Temperature Sensor Report Interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "Second",
            value: "3600",
            Help:
              "\n                This parameter is configured the time interval for temperature sensor report.\n\t\t\t\tThis value is larger, the battery life is longer.\n\t\t\t\tAnd the temperature value changed is not obvious.\n            ",
          },
          {
            genre: "config",
            index: "24",
            label: "Light Sensor Report Interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "Second",
            value: "3600",
            Help:
              "\n                This parameter is configured the time interval for light sensor report.\n\t\t\t\tThis value is larger, the battery life is longer.\n\t\t\t\tAnd the light intensity changed is not obvious.\n            ",
          },
          {
            genre: "config",
            index: "30",
            label: "Temperature Offset Value",
            type: "short",
            units: "0.1",
            value: "0",
            Help:
              "\n                The current measuring temperature value can be add and minus a value by this setting.\n\t\t\t\tThe scale can be decided by Parameter Number 20.\n\t\t\t\tTemperature Offset Value = [Value] * 0.1(Celsius / Fahrenheit)\n\t\t\t\tAvailable Settings: -200 to 200.\n            ",
          },
          {
            genre: "config",
            index: "31",
            label: "Light Intensity Offset Value",
            type: "short",
            units: "Lux",
            value: "0",
            Help:
              "\n                The current measuring light intensity value can be add and minus a value by this setting.\n\t\t\t\tAvailable Settings: -1000 to 1000.\n            ",
          },
          {
            genre: "config",
            index: "100",
            label: "Light Sensor Calibrated Coefficient",
            max: "32767",
            min: "0",
            type: "short",
            units: "",
            value: "1024",
            Help:
              "\n                This configuration defines the calibrated scale for ambient light intensity.\n\t\t\t\tBecause the method and position that the sensor mounted and the cover of sensor will bring measurement error, user can get more real light intensity by this parameter setting.\n\t\t\t\tUser should run the steps as blows for calibrating\n\t\t\t\t1) Set this parameter value to default (Assumes the sensor has been added in a Z- Wave Network).\n\t\t\t\t2) Place a digital light meter close to sensor and keep the same direction, monitor the light intensity value (Vm) which report to controller and record it.\n\t\t\t\tThe same time user should record the value (Vs) of light meter.\n\t\t\t\t3) The scale calibration formula: k = Vm / Vs.\n\t\t\t\t4) The value of k is then multiplied by 1024 and rounded to the nearest whole number.\n\t\t\t\t5) Set the value getting in 5) to this parameter, calibrate finished.\n\n\t\t\t\tFor example, Vm = 300, Vs = 2600, then k = 2600 / 300 = 8.6667\n\t\t\t\t\tk = 8.6667 * 1024 = 8874.7 => 8875.\n\t\t\t\t\tThe parameter should be set to 8875.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "BasicSet report", max_associations: "5" },
              {
                index: "3",
                label: "Temperature Alarm report",
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

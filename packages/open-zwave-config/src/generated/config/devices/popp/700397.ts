import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:000A:0003",
            name: "OzwInfoPage",
          },
          { text: "images/popp/700397.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2842/",
            id: "000A",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "The Wall Plug Switch Outdoor can be placed between a wall outlet for Schuko plugs (plug type F) and electric devices, plugged in by cord. It can switch all loads up to 3500 W. The plug switch is IP 44 rated and can therefore be used both in dry as well as humid environments in- and outdoor.\nSwitching is controlled by the local button or wirelessly. The use of the local button and the behavior oon wireless commands can be configured using configuration parameters. Whn detached from the control of local leads the button on the device can be used to trigger scenes in a central gateway. Single click and double click are distinguished. \nThe device is also measuring the mains voltage supply reporting mains voltage and mains frequency. Addtionally the powr consumption of the attached load is monitored as well.\nAll metering values an be requested from the central controller and will be reported unsolicited if configured.",
            name: "Description",
          },
          { text: "Z-Wave Metering Plug Smart Start", name: "Name" },
          { text: "POPE700397", id: "000A", name: "Identifier", type: "0003" },
          { text: "Tripple Click the button", name: "InclusionDescription" },
          {
            text: "CEPT (Europe)",
            id: "000A",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Tripple Click the button", name: "ExclusionDescription" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2842/POPE700397_v2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "This device allows reset without any involvement of a Z-Wave controller. This procedure should only be used when the primary controller is inoperable. Push and hold the button for 10 seconds. After 5 seconds the LED on the button will blink fast.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2842/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "LED indication mode",
            size: "1",
            type: "list",
            value: "1",
            Help: "Defines when the LED shall shine and how",
            Item: [
              { label: "LED off, only blinks on traffic", value: "0" },
              { label: "Defined by Parameter 21 and 22", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Automatically switch Off",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                If not zero, automatically switch device off after an user defined time.\n                0 -> Disabled (default)\n                1-65535 -> Enabled time in seconds.\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Behaviour for a RF Off-Command",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Defines how to interpret RF Off-Command.\n                Ignore - to switch on the light by motion detectors and switch it off after some amount of time;\n                in case of multiple motion detectors each would try to switch the light off that would break logic;\n                Switch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time.\n                Button off click will still work (if button operations are not disabled).\n            ",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Button Mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines if the local button shall control (switch) the load or it is only used to send out scene control commands to the central controller.",
            Item: [
              { label: "Controls Load + Controls Scenes", value: "0" },
              { label: "Scene Control Only", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Restore switch state after power cycle",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines if the switch should restore switch state to the last prior to device power off (power cycle).",
            Item: [
              { label: "No, turn off", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "LED Color on OFF state",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the behavior of the LED when the load is switched off ",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "LED Color on ON state",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "Defines the behavior of the LED when the load is switched on ",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Voltage Report Threshold",
            max: "250",
            min: "0",
            size: "1",
            type: "byte",
            units: "Volt",
            value: "100",
            Help:
              "\n                Report the voltage when the voltage has changed by more then X  * 1 V. \n                When disabled the device will report every 10 minutes regardless of current voltage.\n                0 -> Disabled\n                100 -> Default\n                0 - 250 -> Volt\n            ",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Current Reporting Threshold",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "* 0,01 A",
            value: "10",
            Help:
              "\n                Report the current when the current has changed by more then X *0,01 A.\n                When disabled the device will report every 10 minutes regardless of current change.\n                0 -> Disabled\n                10 -> default\n                0 - 255 -> * 0,01 A\n            ",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Power Reporting Threshold",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "Watts",
            value: "50",
            Help:
              "\n                Report the power when the power  has changed by more then X Watt. \n                When disabled the device will report every 10 minutes regardless of power consumption change.\n                0 -> Disabled\n                50 -> Default\n                1 - 255 -> Watts\n            ",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Soft Circuit Breaker Threshold",
            max: "3600",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "3600",
            Help:
              "\n                When the power draw exceeds the value set in this parameter for a time set in parameter 28 the soft circuit breaker will disconnect the load.\n                0 -> Disabled\n                3600 -> Default\n                1 - 3600 -> Watts\n            ",
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Soft Circuit Breaker Recovery Time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "Seconds",
            value: "0",
            Help:
              "Once the soft circuit breaker tipps and the load is disconnected the load will be automatically reconnected after X seconds.\n                When disabled the load must be repowered manually or with wireless command.\n                0 -> Disabled (default)\n                1 - 255 -> Seconds\n            ",
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "Soft Circuit Breaker Recovery Time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "* 0,1 sec",
            value: "10",
            Help:
              "This delay time defines how fast the soft circuit breaker wil react when the threshold power is exceeded. \n                The power is cut off only if the power draw remains over the threshold level for the defines time.\n                0 -> Disabled\n                10 -> Default\n                1 - 255 -> * 0,1 sec\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Controlled by buttons",
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

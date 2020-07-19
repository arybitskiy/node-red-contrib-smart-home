import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:00B4:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa006.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3067/",
            id: "00B4",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "00B4",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Please use this procedure only when the primary controller is missing or inoperable.\n\n1. Make sure the device has been powered.\n2. Press and hold the action button for 15 seconds. When the red LED turns on, release the button. Then, the device will enter factory reset mode. If the reset is successful, the LED will blink blue slowly.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Power on the device, and the power led will blink blue slowly.\n2. Put the Z-Wave Primary Controller into inclusion mode (If you don’t know how to do this, refer to its manual)\n3. Press and hold the action button, and when the yellow LED is on, release the button. It indicates the device has enter learn mode.\n4. If added successfully, the power LED will remain green for 2 seconds, then turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "The Aeotec Smart Boost Timer Switch is a Z-Wave Plus enabled device and can be included/operated in any Z-Wave™ network with other Z-Wave™ certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\nThe Aeotec Smart Boost Time Switch supports consumption meter function. When the device has been included in the network, it will report the consumption power periodically. It is also a high output countdown timer that can be used to control immersion heater elements or other electrical appliances rated up to 16A. On the product, four simple white LEDs are used to show the user how much time is left to run. Pressing the switch whilst the unit is operating allows the user to cancel the timing program,and the memory function of the timer will remember the last period selected.",
            name: "Description",
          },
          { text: "Smart Boost Timer Switch", name: "Name" },
          { text: "ZWA006-C", id: "00B4", name: "Identifier", type: "0003" },
          {
            text:
              "1. Power on the device.\n2. Put the Primary Controller into exclusion mode (If you don’t know how to do this refer to its manual)\n3. Press and hold the action button, and when the purple LED turns on, release the button. This indicates that the device has entered learn mode. If removal is successful, the blue LED will blink slowly.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3067/Smart Boost Timer Switch User Manual-V1.9.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3067/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            label: "Power out action",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tAction in case of power out. This parameter is used to configure the device state after power on.\n\t\t\t",
            Item: [
              { label: "Keep the last state when re-power on", value: "0" },
              { label: "Power on", value: "1" },
              { label: "Power off", value: "2" },
              { label: "Return to standard schedule", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "LED status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Configure LED (except boost) to be off irrespective of switch status.\n            ",
            Item: [
              { label: "Disable all LED except for boost", value: "0" },
              { label: "Enable all LED indication", value: "1" },
              { label: "Momentary mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Auto off timer",
            type: "int",
            units: "second",
            value: "0",
            Help:
              "\n                Timer acts as auto off after specified minutes, setting is set in seconds.\n\t\t\t\t0 - no auto off with timer.\n\t\t\t\t1 ~ 86400 auto off after this specified time, unit second.\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Current overload protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "\n\t\t\t\tCurrent and overload protection\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Boost time",
            type: "short",
            units: "minute",
            value: "30",
            Help:
              "\n                Configure boost time interval, unit minute.\n\t\t\t\tWhen user press the boost button one time, the boost time will increase 30 (the value can be changed) minutes.\n            ",
          },
          {
            genre: "config",
            index: "7",
            label: "LED threshold setting",
            max: "3000",
            min: "0",
            type: "short",
            units: "watt",
            value: "100",
            Help:
              "\n                This parameter is used to configure the power led threshold, unit W.\n\t\t\t\tWhen the load <= 100W, the power led will indicate yellow.\n\t\t\t\tWhen the load > 100W, the power led will indicate orange.\n\t\t\t\tWhen no load, the power led will indicate white.\n            ",
          },
          {
            genre: "config",
            index: "20",
            label: "kWh threshold setting",
            max: "10000",
            min: "0",
            type: "short",
            units: "kWh",
            value: "100",
            Help:
              "\n                Threshold settings for energy kWh. When the energy above the threshold, it will send a meter report command to gateway.\n\t\t\t\t0 - disable report.\n\t\t\t\t1 ~ 10000 - enable report.\n            ",
          },
          {
            genre: "config",
            index: "21",
            label: "Watt threshold setting",
            max: "2500",
            min: "0",
            type: "short",
            units: "watt",
            value: "100",
            Help:
              "\n                Threshold settings for Watt automatic report, unit W. When Watt above the threshold, it will send a meter report command to gateway.\n\t\t\t\t0 - disable report.\n\t\t\t\t1 ~ 2500 - enable report.\n            ",
          },
          {
            genre: "config",
            index: "22",
            label: "Current threshold setting",
            max: "150",
            min: "0",
            type: "short",
            units: "0.1A",
            value: "0",
            Help:
              "\n                Threshold settings for Current automatic report, unit 0.1A. When current above the threshold, it will send a meter report command to gateway.\n\t\t\t\t0 - disable report.\n\t\t\t\t1 ~ 150 - enable report.\n            ",
          },
          {
            genre: "config",
            index: "23",
            label: "Watt report interval",
            max: "65535",
            min: "0",
            type: "int",
            units: "second",
            value: "600",
            Help:
              "\n                Watt automatic report interval, unit second.\n\t\t\t\t0 - disable.\n\t\t\t\t65535 - enable.\n            ",
          },
          {
            genre: "config",
            index: "24",
            label: "kWh report interval",
            max: "65535",
            min: "0",
            type: "int",
            units: "second",
            value: "600",
            Help:
              "\n                kWh automatic report interval, unit second.\n\t\t\t\t0 - disable.\n\t\t\t\t65535 - enable.\n            ",
          },
          {
            genre: "config",
            index: "25",
            label: "Voltage report interval",
            max: "65535",
            min: "0",
            type: "int",
            units: "second",
            value: "600",
            Help:
              "\n                Voltage automatic report interval, unit second.\n\t\t\t\t0 - disable.\n\t\t\t\t65535 - enable.\n            ",
          },
          {
            genre: "config",
            index: "26",
            label: "Current report interval",
            max: "65535",
            min: "0",
            type: "int",
            units: "second",
            value: "600",
            Help:
              "\n                Current automatic report interval, unit second.\n\t\t\t\t0 - disable.\n\t\t\t\t65535 - enable.\n            ",
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
              { index: "2", label: "BasicSet", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

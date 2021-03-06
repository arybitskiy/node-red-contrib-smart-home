import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0258:0087:0003",
            name: "OzwInfoPage",
          },
          { text: "images/shenzen_neo/nas-wr01z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1670/",
            id: "0087",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Add the Device (Smart Plug) to Z‐Wave Network\n1.Make sure the sensor is powered. \n2.Set Z‐Wave controller or Z‐Wave gateway into inclusion mode (Refer to the controller or gateway operating manual) \n3.Press the button three times within 1.5 second, the device will enter inclusion mode. And the LED will flash on and off with green alternately five times within 2 seconds.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0087",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "this power plug is connected to power, not battery powered",
            name: "WakeupDescription",
          },
          {
            text:
              "This product can be included and operated in any Z‐Wave network with other Z‐Wave certified devices from other manufacturers and/or other applications. All non‐battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\n\nIn the front casing, there is button that is used to carry out include, exclude or reset factory default settings on PCB Board.\n\nWhen power is first supplied, the LED will flash on and off with yellow alternately every 1 second intervals within 5 seconds if the detector has not been added a Z‐Wave network, otherwise the LED will flash on and off 5 times with cyan alternately every 300 millisecond. Please get familiar with the terms below before starting the operations.\n\nThis Plug has function that remembers the relay states, the plug will turn on after power up next time if the plug is turn on before the power cut‐off.",
            name: "Description",
          },
          { text: "Smart Power Plug", name: "Name" },
          {
            text:
              "Delete the Device (Smart Plug) from Z‐Wave Network\n1.Make sure the sensor is powered. \n2.Set Z‐Wave controller or Z‐Wave gateway into exclusion mode (Refer to the controller or gateway operating manual) \n3.Press the button three times within 1.5 second, the device will enter exclusion mode. And the LED will flash on and off with yellow alternately five times within 2 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1783/Smart-Plug User Guide V2.doc",
            name: "ProductManual",
          },
          {
            text:
              "Note:  to use the reset procedure only when the primary controller is missing or inoperable.\nRestore the Device (Smart Plug) to Factory Default Settings\n\nReset procedure will delete all information on the Z‐Wave network and Z‐Wave controller or Z‐Wave Gateway, and restore the sensor to factory default settings.\n1.Make sure the sensor is powered. \n\n2.Press and hold the button more than 10 seconds until the LED blink with red color. \n\n3.Release the button.",
            name: "ResetDescription",
          },
          { text: "NAS-WR01Z", id: "0087", name: "Identifier", type: "0003" },
          {
            text: "https://products.z-wavealliance.org/products/1783/",
            id: "1087",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "1087",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "NAS-WR01Z", id: "1087", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1670/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1783/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
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
            label: "Send Meter Report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines Disable/Enable meter report measure data to controller.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Meter Report Interval",
            max: "65536",
            min: "1",
            size: "2",
            type: "short",
            units: "second",
            value: "300",
            Help:
              "This parameter defines interval time (in seconds) that Meter report data to main controller.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Configure maximum over-load current",
            max: "16",
            min: "1",
            size: "1",
            type: "byte",
            units: "Ampere",
            value: "13",
            Help:
              "\n        This parameter defines maximum current (in Amperes) the plug can provide to load that be connected to plug.\n        If the current consumed by load is greater than maximum current, the plug will cut off power, and send NOTIFICATION_EVENT_POWER_MANAGEMENT_OVER_LOAD_DETECTED to associated devices in lifeline. Red Led will blink every seconds until current is normal (less than Parameter #3).\n        You must remove the loader and turn on the Plug (press the button once) to enable current monitor and clear NOTIFICATION ALARM. This parameter value must be great than #4.\n        If user set this parameter to default by Configure CC, the parameter #4 will be set to default value.\n      ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Configure maximum Alarm current",
            max: "16",
            min: "1",
            size: "1",
            type: "byte",
            units: "Ampere",
            value: "12",
            Help:
              "\n        This parameter defines maximum current (in Amperes), if the current plug provide to load is greater than this parameter, the plug will send over-current notification to the controller and the LED will turn RED, but plug cannot cut-off power. This parameter value must be less than parameter #3.\n        If user set this parameter to default by Configure CC, the parameter #3 will be set to default value.\n      ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Led Display",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter defines the LED indication Function ON/OFF.\n        If disabled, then LED indication Function and will always be turn-off, while enabled means LED Function is on.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Configure power report",
            max: "100",
            min: "1",
            size: "1",
            type: "byte",
            units: "%",
            value: "30",
            Help:
              "\n        This parameter defines by how much power consumed must change to be reported to the Z-Wave Controller or Z-Wave Gateway, in percents. If the rate of power consumed change ratio is greater than this parameter, the plug will report the results, voltage, current, power and energy, that plug measure to Z-Wave Controller or Z-Wave Gateway\n      ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Remember Relay ON/OFF status",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        This parameter defined the relay status if remember or not.\n        If remembered, the plug will restore the relay status last power off when the plug supply power next time.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Configure Plug Time switch Function",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter defines the timer function Enable/Disable.\n        If disabled, then time switch function is not available.\n        The time period will be defined in parameter #9.\n        If enabled, and when turn the plug relay on, the timer in plug start run with time period defined in parameter #9 and the plug will turn the relay off.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Configure Time switch Period",
            max: "65535",
            min: "1",
            size: "2",
            type: "short",
            units: "minute",
            value: "150",
            Help:
              "\n        This parameter defines the time period that plug time switch off. This parameter can be configured 1 - 65535(in minutes).\n        If Parameter #8 is enabled, and relay is turn-on, the relay will be turn-off after delay this parameter.\n      ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Button On/Off",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter defines the button on/off function is enabled or not on the top of the wall plug.\n        If enabled, users can turn on and off the wall plug by pressing the button on the top of the wall plug.\n        If disabled, the wall plug cannot be turned on and off by pressing the button.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Over-load current", max_associations: "5" },
              { index: "3", label: "Send Notification", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

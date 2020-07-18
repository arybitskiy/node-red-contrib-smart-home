import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0702",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgdw2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2181/",
            id: "1000",
            name: "ZWProductPage",
            type: "0702",
          },
          { text: "FIBARO Door/Window Sensor 2", name: "Name" },
          {
            text:
              "FIBARO Door/Window Sensor 2 is a wireless, battery powered, Z-Wave Plus compatible magnetic contact sensor. Changing the device’s status will automatically send signal to the Z-Wave controller and associated devices. In addition the FIBARO Door/Window Sensor 2 is equipped with a built-in temperature sensor.\nSensor can be used to trigger scenes and wherever there is a need for information about opening or closing of doors, windows, garage doors, etc. Opening is detected by separating the sensor’s body and the magnet.",
            name: "Description",
          },
          { text: "FGDW-002", id: "1000", name: "Identifier", type: "0702" },
          {
            text:
              "1)\tPlace the Door/Window Sensor 2 within the direct range of your Z-Wave controller.\n2)\tSet the main controller in (security/non-security) add mode (see the controller’s manual).\n3)\tClick the Button at least six times.\n4)\tQuickly, three times press one of the TMP buttons (while the other button is pressed).\n5)\tWait for the adding process to end.\n6)\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2181/FGDW-002-EN-T-v0.3.2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1)\tPlace the Door/Window Sensor 2 within the direct range of your Z-Wave controller.\n2)\tSet the main controller into remove mode (see the controller’s manual).\n3)\tQuickly, three times press one of the TMP buttons (while the other button is pressed). \n4)\tWait for the removing process to end.\n5)\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The Door/Window Sensor 2 needs to be woken up to receive informa¬tion about the new configuration from the controller, like parameters and associations. \n1)\tTo wake up the sensor manually, click one of the TMP buttons (while the other button is pressed).",
            name: "WakeupDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. In order to reset the device:\n1)\tOpen the cover. \n2)\tRemove the battery. \n3)\tInstall the battery while holding both TMP buttons. \n4)\tRelease the TMP button within 5 seconds. \n5)\tVisual indicator will blink 3 times to confirm launching of reset procedure. \n6)\tWait around 30s for the resetting process to end, do not remove the battery. \n7)\tVisual LED indicator will blink 6 times to confirm the reset. \n\n*Resetting the device is not the recommended way of removing the device from the Z-Wave network. Use reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0702",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2181/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
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
            label: "Door/window state",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to set in what state is door/window when the magnet is close to the sensor.",
            Item: [
              { label: "Closed", value: "0" },
              { label: "Opened", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Visual LED indications",
            max: "7",
            min: "1",
            size: "1",
            type: "byte",
            value: "6",
            Help:
              "This parameter defines events indicated by the visual LED indicator.\n                Disabling events might extend battery life.\n                0 - no indications\n                1 - indication of opening/closing status change (input IN)\n                2 - indication of wake up (1 x click or periodical)\n                4 - indication of device tampering\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Associations in Z-Wave network Security Mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines how commands are sent in specified association groups: as secure or non-secure.\n                Parameter is active only in Z-Wave network security mode. It does not apply to 1st group Lifeline\n            ",
            Item: [
              { label: "None", value: "0" },
              { label: "Group 2", value: "1" },
              { label: "Group 3", value: "2" },
              { label: "Group 2 and 3", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "2nd association group triggers",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Parameter defines events which result in sending on/off commands to devices added to the 2nd association group.\n                These commands are sent alternately to switch the devices on and off.\n            ",
            Item: [
              { label: "Switch after opening and closing", value: "0" },
              { label: "Switch after opening", value: "1" },
              { label: "Switch after closing", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Association for opening - value sent",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "Value sent to devices in 2nd association group when opening is detected.\n                The value of 0 turns OFF the device, 255 turns it On.\n                In case of associating devices allowing smooth control, values 1-99 allow to set an associated device to a specified level.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Association for closing - value sent",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Value sent to devices in 2nd association group when closing is detected.\n                The value of 0 turns OFF the device, 255 turns it On.\n                In case of associating devices allowing smooth control, values 1-99 allow to set an associated device to a specified level.\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Association for opening - time delay",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time that must elapse from opening to send the command frame to to devices in 2nd association group.",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Association for closing - time delay",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Time that must elapse from closing to send the command frame to devices in 2nd association group.",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Tamper - alarm cancellation delay",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "5",
            Help: "Time period after which a tamper alarm will be cancelled.",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Tamper - reporting alarm cancellation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Reporting cancellation of tamper alarm to the controller and 3rd association group.",
            Item: [
              { label: "Do not send tamper cancellation report", value: "0" },
              { label: "Send tamper cancellation report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Interval of temperature measurements",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "300",
            Help:
              "This parameter defines how often the temperature will be measured.\n                The shorter the time, the more frequently the temperature will be measured, but the battery life will shorten.\n                0 - temperature measurements disabled\n                5-32400 - time in seconds\n            ",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "Temperature reports threshold",
            max: "300",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "This parameter defines the change of temperature in comparison with last reported, resulting in temperature report being sent to the main controller.\n                0 - temperature reports based on threshold disabled\n                1-300 - temperature threshold (0.1-30C, 0.1C step)\n            ",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Interval of temperature reports",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "This parameter determines how often the temperature reports will be sent to the main controller.\n                0 - periodic temperature reports disabled\n                5-32400 - time in seconds\n            ",
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "Temperature offset",
            max: "1000",
            min: "-1000",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "The value to be added to the actual temperature, measured by the sensor (temperature compensation). (0.1C steps)\n            ",
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "Temperature alarm reports",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Temperature alarms reported to the Z-Wave controller.\n                Thresholds are set in parameters 55 and 56.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "High temperature", value: "1" },
              { label: "Low temperature", value: "2" },
              { label: "High and low temperature", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "55",
            instance: "1",
            label: "High temperature alarm threshold",
            max: "600",
            min: "0",
            size: "2",
            type: "short",
            value: "350",
            Help:
              "If temperature is higher than set value, overheat notification will be sent and high temperature scene will be triggered (if activated).\n                0-600 (0-60C, 0.1C step).\n            ",
          },
          {
            genre: "config",
            index: "56",
            instance: "1",
            label: "Low temperature alarm threshold",
            max: "599",
            min: "0",
            size: "2",
            type: "short",
            value: "100",
            Help:
              "If temperature is lower than the set value, underheat notification will be sent and low temperature scene will be triggered (if activated).\n                0-599 (0-59.9C, 0.1C step)\n            ",
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
              { index: "2", label: "On/Off", max_associations: "5" },
              { index: "3", label: "Sabotage", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

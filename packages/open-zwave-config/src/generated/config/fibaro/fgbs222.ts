import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0502",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgbs222.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3285/",
            id: "1000",
            name: "ZWProductPage",
            type: "0502",
          },
          { text: "FGBS-222", id: "1000", name: "Identifier", type: "0502" },
          {
            text:
              "FIBARO Smart Implant allows to enhance the functionality of wired sensors and other devices by adding Z-Wave network communication.\nYou can connect binary sensors, analog sensors, DS18B20 temperature sensors or DHT22 humidity and temperature sensor to report their readings to the Z-Wave controller.\nIt can also control devices by opening/closing output contacts independently of the inputs.\n\nMain features of FIBARO Smart Implant:\n- Compatible with any Z-Wave or Z-Wave+ Controller,\n- Supports Z-Wave network Security Modes: S0 with AES-128 encryption and S2 with PRNG-based encryption,\n- Allows for connecting sensors:\n   o\t6 DS18B20 sensors, \n   o\t1 DHT sensor,\n   o\t2 2-wire analog sensor,\n   o\t2 3-wire analog sensor,\n   o\t2 binary sensors. \n- Works as a Z-Wave signal repeater,\n- Built-in temperature sensor.",
            name: "Description",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n1.\tPower the device.\n2.\tSet the main controller into remove mode (see the controller’s manual).\n3.\tQuickly, triple click button on the device housing or switch connected to IN1 or IN2.\n4.\tLED will start blinking yellow, wait for the removing process to end.\n5.\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "FIBARO Smart Implant is powered using DC power supply unit so it is always awake.",
            name: "WakeupDescription",
          },
          { text: "Smart Implant", name: "Name" },
          {
            text:
              "To add the device to the Z-Wave network manually:\n1.\tPower the device.\n2.\tSet the main controller in (Security/non-Security Mode) add mode (see the controller’s manual).\n3.\tQuickly, triple click button on the device housing or switch connected to IN1 or IN2.\n4.\tIf you are adding in Security S2 Authenticated, scan the DSK QR code or input the 5-digit PIN code (label on the bottom of the box).\n5.\tLED will start blinking yellow, wait for the adding process to end.\n6.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.\n \nTo add the device to the Z-Wave network using Smart Start:\n1.\tSet the main controller in Security S2 Authenticated add mode (see the controller’s manual). \n2.\tScan the DSK QR code or input the 5-digit PIN code (label on the bottom of the box).\n3.\tPower the device.\n4.\tLED will start blinking yellow, wait for the adding process to end.\n5.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0502",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3285/FGBS-222-EN-T-v1.2c.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted.\n\nResetting the device is not the recommended way of\nremoving the device from the Z-Wave network. Use this procedure only when the network primary controller is missing or inoperable. Certain device removal can be achieved by the procedure of removing described.\n\n1.\tPress and hold the button to enter the menu.\n2.\tRelease button when the device glows yellow.\n3.\tQuickly click the button to confirm.\n4.\tAfter few seconds the device will be restarted, which is signalled with the red colour.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3195/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3285/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            index: "20",
            instance: "1",
            label: "Input 1 operating mode",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n        This parameter allows to choose mode of 1st input (IN1). \n        Change it depending on connected device.\n      ",
            Item: [
              { label: "Normally closed alarm input", value: "0" },
              { label: "Normally open alarm input", value: "1" },
              { label: "Monostable button", value: "2" },
              { label: "Bistable button", value: "3" },
              { label: "Analog input without internal pull-up", value: "4" },
              { label: "Analog input with internal pullup", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Input 2 operating mode",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n        This parameter allows to choose mode of 2nd input (IN2). \n        Change it depending on connected device.\n      ",
            Item: [
              { label: "Normally closed alarm input", value: "0" },
              { label: "Normally open alarm input", value: "1" },
              { label: "Monostable button", value: "2" },
              { label: "Bistable button", value: "3" },
              { label: "Analog input without internal pull-up", value: "4" },
              { label: "Analog input with internal pullup", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Inputs orientation",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        This parameter allows reversing operation of IN1 and IN2 inputs without changing the wiring. \n        Use in case of incorrect wiring.\n      ",
            Item: [
              {
                label: "Default (IN1 - 1st input, IN2 - 2nd input)",
                value: "0",
              },
              {
                label: "Reversed (IN1 - 2nd input, IN2 - 1st input)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Outputs orientation",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        This parameter allows reversing operation of OUT1 and OUT2 inputs without changing the wiring. \n        Use in case of incorrect wiring.\n      ",
            Item: [
              {
                label: "Default (OUT1 - 1st output, OUT2 - 2nd output)",
                value: "0",
              },
              {
                label: "Reversed (OUT1 - 2nd output, OUT2 - 1st output)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Input 1 sent scenes",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This parameter defines which actions result in sending scene ID and attribute assigned to them. \n        Parameter is relevant only if parameter 20 is set to 2 or 3. bitmask.\n        0 => No scenes sent.\n        1 => Key pressed 1 time.\n        2 => Key pressed 2 times.\n        4 => Key pressed 3 times.\n        8 => Key hold down and key released.\n      ",
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Input 2 sent scenes",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This parameter defines which actions result in sending scene ID and attribute assigned to them. \n        Parameter is relevant only if parameter 21 is set to 2 or 3. bitmask.\n        0 => No scenes sent.\n        1 => Key pressed 1 time.\n        2 => Key pressed 2 times.\n        4 => Key pressed 3 times.\n        8 => Key hold down and key released.\n      ",
          },
          {
            genre: "config",
            index: "47",
            instance: "1",
            label: "Input 1 value sent to 2nd association group when activated",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "\n        This parameter defines value sent to devices in 2nd association group when IN1 input is triggered (using Basic Command Class).\n        Available settings: 0-255.\n        Default setting: 255.\n      ",
          },
          {
            genre: "config",
            index: "49",
            instance: "1",
            label:
              "Input 1 value sent to 2nd association group when deactivated",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "\n        This parameter defines value sent to devices in 2nd association group when IN1 input is deactivated (using Basic Command Class).\n        Available settings: 0-255.\n        Default setting: 255.\n      ",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Input 2 value sent to 3rd association group when activated",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "\n        This parameter defines value sent to devices in 3rd association group when IN2 input is triggered (using Basic Command Class).\n        Available settings: 0-255.\n        Default setting: 255.\n      ",
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label:
              "Input 2 value sent to 3rd association group when deactivated",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "\n        This parameter defines value sent to devices in 3rd association group when IN2 input is deactivated (using Basic Command Class).\n        Available settings: 0-255.\n        Default setting: 255.\n      ",
          },
          {
            genre: "config",
            index: "150",
            instance: "1",
            label: "Input 1 sensitivity",
            max: "100",
            min: "1",
            type: "byte",
            units: "10ms",
            value: "10",
            Help:
              "\n        This parameter defines the inertia time of IN1 input in alarm modes.\n        Adjust this parameter to prevent bouncing or signal disruptions. \n        Parameter is relevant only if parameter 20 is set to 0 or 1 (alarm mode).\n        Available settings: 1-100 (10ms-1000ms, 10ms step).\n        Default setting: 10 (100ms).\n      ",
          },
          {
            genre: "config",
            index: "151",
            instance: "1",
            label: "Input 2 sensitivity",
            max: "100",
            min: "1",
            type: "byte",
            units: "10ms",
            value: "10",
            Help:
              "\n        This parameter defines the inertia time of IN2 input in alarm modes.\n        Adjust this parameter to prevent bouncing or signal disruptions. Parameter is relevant only if parameter 21 is set to 0 or 1 (alarm mode).\n        Available settings: 1-100 (10ms-1000ms, 10ms step).\n        Default setting: 10 (100ms).\n      ",
          },
          {
            genre: "config",
            index: "152",
            instance: "1",
            label: "Input 1 delay of alarm cancellation",
            max: "3600",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        This parameter defines additional delay of cancelling the alarm on IN1 input. \n        Parameter is relevant only if parameter 20 is set to 0 or 1 (alarm mode).\n        Available settings:\n          0 - no delay.\n          1-3600s.\n        Default setting: 0 (no delay).\n      ",
          },
          {
            genre: "config",
            index: "153",
            instance: "1",
            label: "Input 2 delay of alarm cancellation",
            max: "3600",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        This parameter defines additional delay of cancelling the alarm on IN2 input. \n        Parameter is relevant only if parameter 21 is set to 0 or 1 (alarm mode).\n        Available settings:\n          0 - no delay.\n          1-3600s.\n        Default setting: 0 (no delay).\n      ",
          },
          {
            genre: "config",
            index: "154",
            instance: "1",
            label: "Output 1 logic of operation",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter defines logic of OUT1 output operation.",
            Item: [
              { label: "contacts normally open", value: "0" },
              { label: "contacts normally closed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "155",
            instance: "1",
            label: "Output 2 logic of operation",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter defines logic of OUT2 output operation.",
            Item: [
              { label: "contacts normally open", value: "0" },
              { label: "contacts normally closed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "156",
            instance: "1",
            label: "Output 1 auto off",
            max: "27000",
            min: "0",
            type: "short",
            units: "0.1s",
            value: "0",
            Help:
              "\n        This parameter defines time after which OUT1 will be automatically deactivated.\n        Available settings:\n          0 - auto off disabled.\n          1-27000 (0.1s-45min, 0.1s step).\n        Default setting: 0 (auto off disabled).\n      ",
          },
          {
            genre: "config",
            index: "157",
            instance: "1",
            label: "Output 2 auto off",
            max: "27000",
            min: "0",
            type: "short",
            units: "0.1s",
            value: "0",
            Help:
              "\n        This parameter defines time after which OUT2 will be automatically deactivated.\n        Available settings:\n          0 - auto off disabled.\n          1-27000 (0.1s-45min, 0.1s step).\n        Default setting: 0 (auto off disabled).\n      ",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Analog inputs minimal change to report",
            max: "100",
            min: "0",
            type: "byte",
            units: "0.1v",
            value: "5",
            Help:
              "\n        This parameter defines minimal change (from the last reported) of\n        analog input value that results in sending new report. Parameter is\n        relevant only for analog inputs (parameter 20 or 21 set to 4 or 5).\n        Available settings:\n          0 - (reporting on change disabled).\n          1-100 (0.1-10V, 0.1V step).\n        Default setting: 5 (0.5V).\n      ",
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Analog inputs periodical reports",
            max: "32400",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        This parameter defines reporting period of analog inputs value.\n        Periodical reports are independent from changes in value (parameter 63). Parameter is relevant only for analog inputs (parameter\n        20 or 21 set to 4 or 5).\n        Available settings:\n          0 (periodical reports disabled).\n          60-32400 (60s-9h).\n        Default setting: 0 (periodical reports disabled).\n      ",
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Internal temperature sensor minimal change to report",
            max: "255",
            min: "0",
            type: "short",
            value: "5",
            Help:
              "\n        This parameter defines minimal change (from the last reported)\n        of internal temperature sensor value that results in sending new\n        report.\n        Available settings:\n          0 - (reporting on change disabled).\n          1-255 (0.1-25.5C).\n        Default setting: 5 (0.5C).\n      ",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Internal temperature sensor periodical reports",
            max: "32400",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        This parameter defines reporting period of internal temperature\n        sensor value. Periodical reports are independent from changes in\n        value (parameter 65).\n        Available settings:\n          0 (periodical reports disabled).\n          60-32400 (60s-9h).\n        Default setting: 0 (periodical reports disabled).\n      ",
          },
          {
            genre: "config",
            index: "67",
            instance: "1",
            label: "External sensors minimal change to report",
            max: "255",
            min: "0",
            type: "short",
            value: "5",
            Help:
              "\n        This parameter defines minimal change (from the last reported) of\n        external sensors values (DS18B20 or DHT22) that results in sending new\n        report. Parameter is relevant only for connected DS18B20 or DHT22\n        sensors.\n        Available settings:\n          0 - (reporting on change disabled).\n          1-255 (0.1-25.5 units).\n        Default setting: 5 (0.5 units)\n      ",
          },
          {
            genre: "config",
            index: "68",
            instance: "1",
            label: "External sensors periodical reports",
            max: "32400",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        This parameter defines reporting period of analog inputs value.\n        Periodical reports are independent from changes in value (parameter 67).\n        Parameter is relevant only for connected DS18B20 or DHT22 sensors.\n        Available settings:\n          0 - (periodical reports disabled).\n          60-32400 (60s-9h).\n        Default setting: 0 (periodical reports disabled).\n      ",
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Input IN1", max_associations: "5" },
              { index: "3", label: "Input IN2", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

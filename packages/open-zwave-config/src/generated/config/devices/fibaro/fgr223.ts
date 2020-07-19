import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0303",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgr223.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3278/",
            id: "1000",
            name: "ZWProductPage",
            type: "0303",
          },
          {
            text:
              "FIBARO Roller Shutter 3 is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              'Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted.\n1.\tSwitch off the mains voltage (disable the fuse).\n2.\tRemove the device from the wall switch box.\n3.\tSwitch on the mains voltage.\n4.\tPress and hold the B-button to enter the menu.\n5.\tWait for the LED indicator to glow yellow.\n6.\tQuickly release and click the B-button again.\n7.\tAfter few seconds the device will be restarted, which is signalled with the red LED indicator colour.\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable."',
            name: "ResetDescription",
          },
          { text: "FGR-223", id: "1000", name: "Identifier", type: "0303" },
          { text: "Roller Shutter 3", name: "Name" },
          {
            text:
              "To add the device to the Z-Wave network manually:\n1.\tPower the device.\n2.\tIdentify the S1 switch.\n3.\tSet the main controller in (Security/non-Security Mode) add mode (see the controller’s manual).\n4.\tQuickly, triple click the S1 switch.\n5.\tIf you are adding in Security S2, scan the DSK QR code or input the underlined part of the DSK (label on the bottom of the box).\n6.\tWait for the adding process to end.\n7.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.\n\nTo add the device to the Z-Wave network using Smart Start:\n1.\tSet the main controller in Security S2 Authenticated add mode (see the controller’s manual) \n2.\tScan the DSK QR code or input the underlined part of the DSK \n3.\t(label on the bottom of the box).\n4.\tPower the device (turn on the mains voltage).\n5.\tLED will start blinking yellow, wait for the adding process to end.\n6.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3278/FGR-223-EN-T-v1.3.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0303",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n1.\tMake sure the device is powered.\n2.\tIdentify the S1 switch.\n3.\tSet the main controller in remove mode (see the controller’s manual).\n4.\tQuickly, triple click the S1 switch.\n5.\tWait for the removing process to end.\n6.\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "FIBARO Roller Shutter 3 is a device designed to control roller blinds, awnings, venetian blinds, gates and other single phase, AC powered devices. \nRoller Shutter 3 allows precise positioning of roller blinds or venetian blind lamellas. The device is equipped with power and energy monitoring. It allows to control connected devices either via the Z-Wave network or via a switch connected directly to it.\nMain features of FIBARO Roller Shutter 3:\n- Compatible with any Z-Wave or Z-Wave Plus Controller,\n- Supports Z-Wave network Security Modes: S0 with AES-128 encryption and S2 with PRNG-based encryption,\n- To be installed with roller blind motors with electronic or mechanical limit switches,\n- Advanced microprocessor control,\n- Active power and energy metering functionality,\n- Works with various types of switches – momentary, toggle and dedicated roller blind switches,\n- To be installed in wall switch boxes,\n- Works as a Z-Wave signal repeater.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3183/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3278/xml",
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
            label: "Switch type",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n                This parameter defines as what type the device should treat the switch connected to the S1 and S2 terminals.\n                This parameter is not relevant in gate operating modes (parameter 151 set to 3 or 4).\n                In this case switch always works as a momentary and has to be connected to S1 terminal.\n            ",
            Item: [
              { label: "Momentary switches", value: "0" },
              { label: "Toggle switches", value: "1" },
              { label: "Single, momentary switch", value: "2" },
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
              "\n                This parameter allows reversing the operation of switches connected to S1 and S2 without changing the wiring.\n                Default:  S1 -> 1st channel, S2 -> 2nd channel.\n                Reversed: S1 -> 2nd channel, S2 -> 1st channel.\n            ",
            Item: [
              { label: "Default", value: "0" },
              { label: "Reversed", value: "1" },
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
              "\n                This parameter allows reversing the operation of Q1 and Q2 without changing the wiring (in case of invalid motor connection) to ensure proper operation.\n                - Default:  Q1 -> 1st channel, Q2 -> 2nd channel.\n                - Reversed: Q1 -> 2nd channel, Q2 -> 1st channel.\n            ",
            Item: [
              { label: "Default", value: "0" },
              { label: "Reversed", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Alarm configuration - 1st slot",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n                This parameter determines to which alarm frames and how the device should react.\n                The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n                1B [MSB] - notification Type.\n                2B - notification Status.\n                3B - Event/State Parameters.\n                4B [lSB] action:\n                    0 - no action,\n                    1 - open blinds,\n                    2 - close blinds.\n                Default setting: [0x00, 0x00, 0x00, 0x00]\n            ",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Alarm configuration - 2st slot (water)",
            size: "4",
            type: "int",
            value: "1358888960",
            Help:
              "\n                This parameter determines to which alarm frames and how the device should react.\n                The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n                1B [MSB] - notification Type.\n                2B - notification Status.\n                3B - Event/State Parameters.\n                4B [lSB] action:\n                    0 - no action,\n                    1 - open blinds,\n                    2 - close blinds.\n                Default setting: [0x05, 0xFF, 0x00, 0x00] (Water Alarm, any notification, no action)\n            ",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Alarm configuration - 3st slot (smoke)",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n                This parameter determines to which alarm frames and how the device should react.\n                The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n                1B [MSB] - notification Type.\n                2B - notification Status.\n                3B - Event/State Parameters.\n                4B [lSB] action:\n                    0 - no action,\n                    1 - open blinds,\n                    2 - close blinds.\n                Default setting: [0x01, 0xFF, 0x00, 0x00] (Smoke Alarm, any notification, no action)\n            ",
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "Alarm configuration - 4st slot (CO)",
            size: "4",
            type: "int",
            value: "50266112",
            Help:
              "\n                This parameter determines to which alarm frames and how the device should react.\n                The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n                1B [MSB] - notification Type.\n                2B - notification Status.\n                3B - Event/State Parameters.\n                4B [lSB] action:\n                    0 - no action,\n                    1 - open blinds,\n                    2 - close blinds.\n                Default setting: [0x02, 0xFF, 0x00, 0x00] (CO Alarm, any notification, no action)\n            ",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Alarm configuration - 5st slot (heat)",
            size: "4",
            type: "int",
            value: "83820544",
            Help:
              "\n                This parameter determines to which alarm frames and how the device should react.\n                The parameters consist of 4 bytes, three most significant bytes are set according to the official Z-Wave protocol specification.\n                1B [MSB] - notification Type.\n                2B - notification Status.\n                3B - Event/State Parameters.\n                4B [lSB] action:\n                    0 - no action,\n                    1 - open blinds,\n                    2 - close blinds.\n                Default setting: [0x04, 0xFF, 0x00, 0x00] (Heat Alarm, any notification, no action)\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "S1 switch - scenes sent",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions result in sending scene IDs assigned to them.\n                Sum of:\n                1 - Key pressed 1 time.\n                2 - Key pressed 2 times.\n                4 - Key pressed 3 times.\n                8 - Key hold down and key released.\n                Default setting: 0.\n            ",
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "S2 switch - scenes sent",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter determines which actions result in sending scene IDs assigned to them.\n                Sum of:\n                1 - Key pressed 1 time.\n                2 - Key pressed 2 times.\n                4 - Key pressed 3 times.\n                8 - Key hold down and key released.\n                Default setting: 0.\n            ",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Measuring power consumed by the device itself",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines whether the power metering should include the amount of active power consumed by the device itself.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Power reports - on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            units: "%",
            value: "15",
            Help:
              "\n                This parameter determines the minimum change in consumed power that will result in sending new power report to the main controller.\n                For loads under 50W, the parameter is not relevant and reports are sent every 5W change.\n                Power reports are sent no often than every 30 seconds.\n                0: reports are disabled.\n                1-500 (1-500%): change in power.\n                Default setting: 15.\n            ",
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "Power reports - periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "second",
            value: "3600",
            Help:
              "\n                This parameter determines in what time intervals the periodic power reports are sent to the main controller.\n                Periodic reports do not depend on power change (parameter 61).\n                0: periodic reports are disabled\n                30-32400 (30-32400s): report interval.\n                Default setting: 3600 (1h).\n            ",
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Energy reports - on change",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            units: "0.01 kWh",
            value: "10",
            Help:
              "\n                This parameter determines the minimum change in consumed energy that will result in sending new energy report to the main controller.\n                0: reports are disabled.\n                1-500 (0.01 - 5 kWh): change in energy.\n                Default setting: 10 (0.1 kWh).\n            ",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Energy reports - periodic",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "second",
            value: "3600",
            Help:
              "\n                This parameter determines in what time intervals the periodic energy reports are sent to the main controller.\n                Periodic reports do not depend on energy change (parameter 65).\n                0: periodic reports are disabled.\n                30-32400 (30-32400s): report interval.\n                Default setting: 3600 (1h)\n            ",
          },
          {
            genre: "config",
            index: "150",
            instance: "1",
            label: "Force calibration",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                By setting this parameter to 2 the device enters the calibration mode.\n                The parameter relevant only if the device is set to work in positioning mode (parameter 151 set to 1, 2 or 4).\n            ",
            Item: [
              { label: "Device is not calibrated", value: "0" },
              { label: "Device is calibrated", value: "1" },
              { label: "Force device calibration", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "151",
            instance: "1",
            label: "Operating mode",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter allows adjusting operation according to the connected device.",
            Item: [
              { label: "Roller blind", value: "1" },
              { label: "Venetian blind", value: "2" },
              { label: "gate without positioning", value: "3" },
              { label: "gate with positioning", value: "4" },
              { label: "roller blind with built-in driver", value: "5" },
              {
                label: "roller blind with built-in driver (impulse)",
                value: "6",
              },
            ],
          },
          {
            genre: "config",
            index: "152",
            instance: "1",
            label: "Venetian blind - time of full turn of the slats",
            max: "90000",
            min: "0",
            size: "4",
            type: "int",
            units: "0.1 second",
            value: "150",
            Help:
              "\n                For Venetian blinds (parameter 151 set to 2) the parameter determines time of full turn cycle of the slats.\n                For gates (parameter 151 set to 3 or 4) the parameter determines time after which open gate will start closing automatically (if set to 0, gate will not close).\n                The parameter is irrelevant for other modes.\n                0-90000 (0 - 900s, every 0.01s) time of turn.\n                Default setting: 150 (1.5s).\n            ",
          },
          {
            genre: "config",
            index: "153",
            instance: "1",
            label: "Set slats back to previous position",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                For Venetian blinds (parameter 151 set to 2) the parameter determines slats positioning in various situations.\n                The parameter is irrelevant for other modes.\n            ",
            Item: [
              {
                label: "Only in case of the main controller operation",
                value: "0",
              },
              {
                label:
                  "In case of the main controller operation, momentary switch operation, or when the limit switch is reached.",
                value: "1",
              },
              {
                label:
                  "In case of the main controller operation, momentary switch operation, when the limit switch is reached or after receiving the Switch Multilevel Stop control frame",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "154",
            instance: "1",
            label: "Delay motor stop after reaching end switch",
            max: "600",
            min: "0",
            size: "2",
            type: "short",
            units: "0.1 second",
            value: "10",
            Help:
              "\n                For blinds (parameter 151 set to 1, 2, 5 or 6) the parameter determines the time after which the motor will be stopped after end switch contacts are closed.\n                For gates (parameter 151 set to 3 or 4) the parameter determines the time after which the gate will start closing automatically if S2 contacts are opened (if set to 0, gate will not close).\n                0-600 (0 - 60s).\n                Default setting: 10 (1s).\n            ",
          },
          {
            genre: "config",
            index: "155",
            instance: "1",
            label: "Motor operation detection",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "watt",
            value: "10",
            Help:
              "\n                Power threshold to be interpreted as reaching a limit switch.\n                0: reaching a limit switch will not be detected\n                1-255 (1-255W): report interval.\n                Default setting: 10.\n            ",
          },
          {
            genre: "config",
            index: "156",
            instance: "1",
            label: "Time of up movement",
            max: "90000",
            min: "0",
            size: "4",
            type: "int",
            units: "0.01 second",
            value: "6000",
            Help:
              "\n                This parameter determines the time needed for roller blinds to reach the top.\n                For modes with positioning value is set automatically during calibration, otherwise, it must be set manually.\n                1-90000 (0.01 - 900.00s).\n                Default setting: 6000 (60s).\n            ",
          },
          {
            genre: "config",
            index: "157",
            instance: "1",
            label: "Time of down movement",
            max: "90000",
            min: "0",
            size: "4",
            type: "int",
            units: "0.01 second",
            value: "6000",
            Help:
              "\n                This parameter determines time needed for roller blinds to reach the bottom.\n                For modes with positioning value is set automatically during calibration, otherwise, it must be set manually.\n                1-90000 (0.01 - 900.00s).\n                Default setting: 6000 (60s).\n            ",
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
              { index: "2", label: "Roller Shutter", max_associations: "5" },
              { index: "3", label: "Slats", max_associations: "5" },
            ],
          },
        ],
      },
      {
        id: "145",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Venetian Blind slat position",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
          },
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Venetian blind tilt position",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
          },
        ],
      },
    ],
  },
};

export default config;

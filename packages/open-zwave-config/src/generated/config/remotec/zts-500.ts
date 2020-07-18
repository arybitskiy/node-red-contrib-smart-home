import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8170:0200",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zts-500.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1767/",
            id: "8170",
            name: "ZWProductPage",
            type: "0200",
          },
          {
            text:
              "Press and keep holding > or < for 3 seconds to navigate to the System Main (SYS) screen.\nPress > to navigate to the Reset (RST) screen.\nPress + or - to select Yes.\nPress and keep holding > for 2 seconds to confirm your selection.\nPress < to cancel and back to the previous screen.\nUse the RESET procedure ONLY when the primary Controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "8170",
            name: "FrequencyName",
            type: "0200",
          },
          {
            text:
              "ZTS-500 is a user-friendly Z-Wave programmable smart thermostat. The ZTS-500 is compatible with any Z-Wave certified controller or gateway and is designed to fit perfectly over most original thermostat installation marks without the need for a mounting board. The invisible 4-button back-illuminated interface combines a simple and intuitive interactive experience with a modern fashionable look. The flip-over terminal-board makes installation a breeze, The ZTS-500 allows utilization even in environments where a C wire is not available. With automatic power source detection (24Vac or Battery Power), it decide to maximizing battery life or acting as a range extender in the Z-Wave network, and all your connections will be safe and secure behind AES128 encryption. The ZTS-500’s available multi-color faceplates allow for seamless integration into a variety of interior designs.",
            name: "Description",
          },
          {
            text:
              "From the Standby screen, press > or < to navigate to the Z-Wave screen and the Z-Wave LED will continuously flash.\nTap + to include the ZTS-500US into the network.\n-\tThe “✔” symbol will be displayed on screen once the ZTS-500US is added into the network.\nThe Z-Wave disconnect icon will also be removed from the standby screen.\n\n-\tThe “x” symbol will be displayed on screen if there is no action (time out) or unable to include the ZTS-500US into the network.",
            name: "InclusionDescription",
          },
          { text: "ZTS-500US", id: "8170", name: "Identifier", type: "0200" },
          {
            text:
              "Press and keep holding > or < for 3 seconds to navigate to the System Main (SYS) screen. \nOn the Z-Wave (Z-w) screen.\nTap + to exclude ZTS-500US from the network.\nPress < to cancel and back to the previous screen.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1767/F-BW8170US (ZTS-500US) User_Manual_V1.01_Z-Wave validation_20160510.pdf",
            name: "ProductManual",
          },
          { text: "Z-WAVE SMART THERMOSTAT", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1767/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "67", Compatibility: [{ GetSupported: [false], Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Scale of temperature",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Celsius or Fahrenheit.",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Swing",
            max: "4",
            min: "0",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tSwing is the difference allowed from current temp to setpoint before the thermostat turns on.\n\t\t\t\tEG: A swing of 2 and setpoint of 70 means the heat turns on at 68 and off at 72.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Differential",
            max: "4",
            min: "0",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tDifferential is the difference needed from the swing before the 2nd stage kicks in.\n\t\t\t\tEG: A swing of 2, differntial of 2, and setpoint of 70 means the heat turns on at 68 and off at 72. The second-stage heat would turn on at 67 and off at 68.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Dead band",
            max: "6",
            min: "3",
            size: "1",
            type: "list",
            value: "4",
            Help:
              "\n\t\t\t\tOn thermostats that automatically control both heating and cooling systems,\n\t\t\t\ta dead band is a temperature range in which neither system turns on. The dead\n\t\t\t\tband prevents the thermostat from activating heat and cooling in rapid\n\t\t\t\tsuccession. This conserves energy by providing a range of temperatures\n\t\t\t\trequiring no energy consumption.\n\t\t\t\tDead band value:\n\t\t\t\t3(0x03)= 3 F / 1.5 C\n\t\t\t\t4(0x04)= 4 F / 2.0 C (default)\n\t\t\t\t5(0x05)= 5 F / 2.5 C\n\t\t\t\t6(0x06)= 6 F / 3.0 C\n\t\t\t",
            Item: [
              { label: "3 F / 1.5 C", value: "3" },
              { label: "4 F / 2.0 C", value: "4" },
              { label: "5 F / 2.5 C", value: "5" },
              { label: "6 F / 3.0 C", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Upper limit of heat set point",
            type: "short",
            value: "950",
            Help:
              "\n\t\t\t\tUnit in C:\n\t\t\t\tRange from 5 to [(37 ) - (dead band)]\n\t\t\t\tRange from 50 (0x0032) to 355 (0x0163)\n\t\t\t\tExample 28 ; input = 280 (0x0118)\n\n\t\t\t\tUnit in F:\n\t\t\t\tRange from 41 to [(99 ) - (dead band)]\n\t\t\t\tRange from 410 (0x019A) to 960 (0x03C0)\n\t\t\t\tExample 82 ; input = 820 (0x0334)\n\t\t\t\tDefault = (99 ) - (dead band)\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Lower limit of cool set point",
            type: "short",
            value: "440",
            Help:
              "\n\t\t\t\tUnit in C:\n\t\t\t\tRange from [(5 C) + (dead band)] to 37 C\n\t\t\t\tRange from 65 (0x0041) to 370 (0x0172)\n\t\t\t\tExample 20 C; input = 200 (0x00C8)\n\n\t\t\t\tUnit in F:\n\t\t\t\tRange from [(41 F) + (dead band)] to 99 F\n\t\t\t\tRange from 440 (0x01B8) to 990 (0x03DE)\n\t\t\t\tExample 68 F; input = 680 (0x02A8)\n\t\t\t\tDefault = (41 F) + (dead band)\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "Reset filter counter",
            size: "1",
            type: "byte",
            value: "0",
            Help: "\n                    0 (0x00) (default)\n            ",
          },
          {
            genre: "config",
            index: "8",
            label: "Set filter counter",
            max: "4000",
            min: "500",
            type: "short",
            value: "500",
            Help:
              "How many hours before the filter change reminder is displayed.",
          },
          {
            genre: "config",
            index: "9",
            label: "Report filter counter",
            read_only: "true",
            type: "short",
            value: "0",
            Help:
              "How many hours the system has run since the filter counter was last reset. Read only.",
          },
          {
            genre: "config",
            index: "10",
            label: "sensor temperature calibration",
            max: "10",
            min: "-10",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                    This parameter is used to change the display temperature\n                    to match with your previous thermostat, or to match another\n                    thermostat already in your home\n                    Formula: Display temperature = sensor reading value + offset value\n                    0 (0x00) = 0 F (default)\n                    1 (0x01) = 1 F (0.5 C)\n                    2 (0x02) = 2 F (1.0 C)\n                    3 (0x03) = 3 F (1.5 C)\n                    4 (0x04) = 4 F (2.0 C)\n                    5 (0x05) = 5 F (2.5 C)\n                    6 (0x06) = 6 F (3.0 C)\n                    7 (0x07) = 7 F (3.5 C)\n                    8 (0x08) = 8 F (4.0 C)\n                    9 (0x09) = 9 F (4.5 C)\n                    10 (0x0A) = 10 F (5.0 C)\n                    -1 (0xFF) = -1 F (-0.5 C)\n                    -2 (0xFE) = -2 F (-1.0 C)\n                    -3 (0xFD) = -3 F (-1.5 C)\n                    -4 (0xFC) = -4 F (-2.0 C)\n                    -5 (0xFB) = -5 F (-2.5 C)\n                    -6 (0xFA) = -6 F (-3.0 C)\n                    -7 (0xF9) = -7 F (-3.5 C)\n                    -8 (0xF8) = -8 F (-4.0 C)\n                    -9 (0xF7) = -9 F (-4.5 C)\n                    -10 (0xF6) = -10 F (-5.0 C)\n            ",
            Item: [
              { label: "-10 F / -5.0 C", value: "-10" },
              { label: "-9 F / -4.5 C", value: "-9" },
              { label: "-8 F / -4.0 C", value: "-8" },
              { label: "-7 F / -3.5 C", value: "-7" },
              { label: "-6 F / -3.0 C", value: "-6" },
              { label: "-5 F / -2.5 C", value: "-5" },
              { label: "-4 F / -2.0 C", value: "-4" },
              { label: "-3 F / -1.5 C", value: "-3" },
              { label: "-2 F / -1.0 C", value: "-2" },
              { label: "-1 F / -0.5 C", value: "-1" },
              { label: "0 F / 0 C", value: "0" },
              { label: "1 F / 0.5 C", value: "1" },
              { label: "2 F / 1.0 C", value: "2" },
              { label: "3 F / 1.5 C", value: "3" },
              { label: "4 F / 2.0 C", value: "4" },
              { label: "5 F / 2.5 C", value: "5" },
              { label: "6 F / 3.0 C", value: "6" },
              { label: "7 F / 3.5 C", value: "7" },
              { label: "8 F / 4.0 C", value: "8" },
              { label: "9 F / 4.5 C", value: "9" },
              { label: "10 F / 5.0 C", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "LED brightness level",
            size: "1",
            type: "byte",
            value: "2",
            Help:
              "\n                    1 (0x01) = Level-1 (dark)\n                    2 (0x02) = Level-2 (middle) , default\n                    3 (0x03) = Level-3 (bright)\n            ",
          },
          {
            genre: "config",
            index: "12",
            label: "Sleep timer",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "5",
            Help:
              "\n                    3 (0x03) to 60 (0x3C) seconds,\n                    255 (0xFF) = Always On\n                    Step size = 1s,\n                    Batt = 5s, default\n                    24Vac = 60s, default\n            ",
          },
          {
            genre: "config",
            index: "13",
            label: "Repeat basic set counter",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              '\n\t\t\t\tRepeat basic set counter (Association Group A and B only)\n\t\t\t\tValue(X): 0 (0x00), 3 (0x03) to 255 (0xFF)\n\t\t\t\t0 (0X00) = Disable, default\n\t\t\t\t3 (0x03) to 255 (0xFF) minutes\n\t\t\t\t(Thermostat sends "Basic Set" command to its association node repeatedly in every X minutes)\n\t\t\t',
          },
          {
            genre: "config",
            index: "14",
            label: "Auto report trigger threshold",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help:
              "\n\t\t\t\tTrigger AUTO report if room temperature is different from last\n\t\t\t\treport.\t(It will report room temperature only)\n\t\t\t\t*User can use this function to enhance batteries service life\n\t\t\t\t0 (0x00) = disable AUTO report if room temperature is different from last report.\n\t\t\t\tAUTO report if room temperature is different from last report.\n\t\t\t\tDelta change is >=\n\t\t\t\t1 (0x01) = 1 F (0.5 C), (default if powered by 24Vac)\n\t\t\t\t2 (0x02) = 2 F (1.0 C), (default if powered by battery)\n\t\t\t\t3 (0x03) = 3 F (1.5 C)\n\t\t\t\t4 (0x04) = 4 F (2.0 C)\n\t\t\t\t5 (0x05) = 5 F (2.5 C)\n\t\t\t\t6 (0x06) = 6 F (3.0 C)\n\t\t\t\t7 (0x07) = 7 F (3.5 C)\n\t\t\t\t8 (0x08) = 8 F (4.0 C)\n\t\t\t",
            Item: [
              { label: "1 F / 0.5 C", value: "1" },
              { label: "2 F / 1.0 C", value: "2" },
              { label: "3 F / 1.5 C", value: "3" },
              { label: "4 F / 2.0 C", value: "4" },
              { label: "5 F / 2.5 C", value: "5" },
              { label: "6 F / 3.0 C", value: "6" },
              { label: "7 F / 3.5 C", value: "7" },
              { label: "8 F / 4.0 C", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Auto report time interval",
            max: "16",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n\t\t\t\tAUTO report by time interval. (It will report room temperature only)\n\t\t\t\t*User can use this function to enhance batteries service life.\n\t\t\t\t0 (0x00) = disable AUTO report function. (by time interval), (default)\n\t\t\t\tAUTO report timer:\n\t\t\t\t1 (0x01) = 0.5 hr\n\t\t\t\t2 (0x02) = 1.0 hr\n\t\t\t\t3 (0x03) = 1.5 hrs\n\t\t\t\t4 (0x04) = 2.0 hrs\n\t\t\t\t5 (0x05) = 2.5 hrs\n\t\t\t\t6 (0x06) = 3.0 hrs\n\t\t\t\t7 (0x07) = 3.5 hrs\n\t\t\t\t8 (0x08) = 4.0 hrs\n\t\t\t\t9 (0x09) = 4.5 hrs\n\t\t\t\t10 (0x0A) = 5.0 hrs\n\t\t\t\t11 (0x0B) = 5.5 hrs\n\t\t\t\t12 (0x0C) = 6.0 hrs\n\t\t\t\t13 (0x0D) = 6.5 hrs\n\t\t\t\t14 (0x0E) = 7.0 hrs\n\t\t\t\t15 (0x0F) = 7.5 hrs\n\t\t\t\t16 (0x10) = 8.0 hrs\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "30 minutes", value: "1" },
              { label: "1 hour", value: "2" },
              { label: "1 hour 30 minutes", value: "3" },
              { label: "2 hours", value: "4" },
              { label: "2 hours 30 minutes", value: "5" },
              { label: "3 hours", value: "6" },
              { label: "3 hours 30 minutes", value: "7" },
              { label: "4 hours", value: "8" },
              { label: "4 hours 30 minutes", value: "9" },
              { label: "5 hours", value: "10" },
              { label: "5 hours 30 minutes", value: "11" },
              { label: "6 hours", value: "12" },
              { label: "6 hours 30 minutes", value: "13" },
              { label: "7 hours", value: "14" },
              { label: "7 hours 30 minutes", value: "15" },
              { label: "8 hours", value: "16" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Heating Mode group",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Cooling Mode group",
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

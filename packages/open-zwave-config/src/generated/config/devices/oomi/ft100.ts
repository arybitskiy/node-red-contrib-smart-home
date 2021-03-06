import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/016A:0064:0102",
            name: "OzwInfoPage",
          },
          { text: "images/oomi/ft100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1534/",
            id: "0064",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "Oomi MultiSensor looks like a motion sensor and it acts like one too. But it’s also so much more. Installing this 1 piece of Z-Wave® technology is the same as installing 6 pieces of Z-Wave technology. Your home control network will immediately understand motion, temperature, humidity, light, Ultraviolet and Vibration readings wherever MultiSensor installed. Those intelligent readings will equate to intelligence automation. And intelligent automation will give you the perfect, smart home.",
            name: "Description",
          },
          {
            text:
              "Pressing the Z-Wave button once will trigger sending the Wake up notification command. If press and hold the Z-Wave button for 3 seconds, the MultiSensor will wake up for 10 minutes.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0064",
            name: "FrequencyName",
            type: "0102",
          },
          { text: "FT100-A", id: "0064", name: "Identifier", type: "0102" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Z-Wave button that you can find in back of the product.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2592/Oomi MultiSensor manual3.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Z-Wave button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the Z-Wave button that you can find in back of the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          { text: "MultiSensor", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/2592/",
            id: "0064",
            name: "ZWProductPage",
            type: "1D02",
          },
          { text: "China", id: "0064", name: "FrequencyName", type: "1D02" },
          { text: "FT100-K", id: "0064", name: "Identifier", type: "1D02" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1534/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2592/xml",
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
            index: "2",
            label: "Wake up 10 minutes on Power On",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable waking up for 10 minutes when re-power on (battery mode) the MultiSensor",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "On time",
            max: "3600",
            min: "10",
            type: "short",
            units: "seconds",
            value: "240",
            Help:
              "Duration that the motion sensor must observe no motion before it will return to the no-motion state.\n\t\t\tIf value greater than 255, effective value is rounded up to the nearest minute (255 -> 255 seconds, 256 -> 300 seconds)",
          },
          {
            genre: "config",
            index: "4",
            label: "Enable Motion Sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "Enable Motion Sensor, (1 minimum, 5 maximum sensitivity level)",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled level 1", value: "1" },
              { label: "Enabled level 2", value: "2" },
              { label: "Enabled level 3", value: "3" },
              { label: "Enabled level 4", value: "4" },
              { label: "Enabled level 5", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Command Options",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Which commands to send when PIR motion sensor triggered\n\t\t\tOZW Ideal Value is Binary Sensor Report",
            Item: [
              { label: "Basic Set", value: "1" },
              { label: "Binary Sensor Report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Awake timeout",
            max: "255",
            min: "8",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n\t\t\tSet the timeout of awake after the Wake Up CC is sent out.\n\t\t\tAvailable rang: 8 to 255 seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Current power mode",
            max: "257",
            min: "0",
            read_only: "true",
            size: "2",
            type: "list",
            value: "0",
            Help:
              "Report the current power mode and the product state for battery power mode",
            Item: [
              {
                label: "USB power, sleeping mode after re-power on",
                value: "0",
              },
              {
                label: "USB power, keep awake for 10 minutes after re-power on",
                value: "1",
              },
              {
                label: "Battery power, sleeping mode after re-power on",
                value: "256",
              },
              {
                label:
                  "Battery power, keep awake for 10 minutes after re-power on",
                value: "257",
              },
            ],
          },
          {
            genre: "config",
            index: "39",
            label: "Low Battery",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            value: "20",
            Help: "Configure low battery value\n\t\t\tValue=10 to 50.",
          },
          {
            genre: "config",
            index: "40",
            label: "Report Only On Thresholds",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable the selective reporting only when measurements reach a certain threshold or percentage \n\t\t\tset in the threshold settings.  This is used to reduce network\n\t\t\ttraffic.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "41",
            label: "Temperature Reporting Threshold",
            max: "39321",
            min: "0",
            size: "4",
            type: "int",
            units: "C/F",
            value: "20",
            Help:
              "Threshold change in temperature to induce an automatic report.  \n\t\t\tNote: \n\t\t\t1. The unit is Fahrenheit for US version, Celsius for EU/AU version.\n\t\t\t2. The value contains one decimal point. E.g. if the value is set to 20, the threshold value = 2.0 C (EU/AU) or 2.0 F (US). When the temperature has changed by 2.0 (of the appropriate unit), a temperature report will be sent.\n\t\t\t",
          },
          {
            genre: "config",
            index: "42",
            label: "Humidity Reporting Threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Threshold change in humidity to induce an automatic report. \n\t\t\tNote: \n\t\t\t1. The unit is %.\n\t\t\t2. The default value is 10, which means that a 10% change in humidity will trigger a report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "43",
            label: "Luminance Reporting Threshold",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            units: "LUX",
            value: "100",
            Help:
              "Threshold change in luminance to induce an automatic report.",
          },
          {
            genre: "config",
            index: "44",
            label: "Battery Reporting Threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Threshold change in battery level to induce an  automatic report. \n\t\t\tNote: \n\t\t\t1. The unit is %.\n\t\t\t2. The default value is 10, which means that a 10% change in battery will trigger a report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "45",
            label: "UV Reporting Threshold",
            max: "255",
            min: "0",
            read_only: "true",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "Threshold change in ultraviolet to induce an automatic report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "46",
            label: "Low Temp Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable to send the alarm report of low temperature(Less than 15 Degress C)\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "48",
            label: "Enable/disable to send a report on Threshold",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\tEnable/disable to send a report when the measurement is more than the upper limit value or less than the lower limit value.\n\t\t\tBit mask = 0, disable.\n\t\t\tBit mask = 1, enable.\n\t\t\tBit 0 = temperature.\n\t\t\tBit 1 = humidity.\n\t\t\tBit 2 = luminance.\n\t\t\tBit 3 = ultraviolet.\n\t\t\tThe above bit masks are used to enable/disable to send out a report when the measurement is less than the lower limit value.\n\t\t\tThe below bit masks are used to enable/disable to send out a report when the measurement is more than the upper limit value.\n\t\t\tBit 4 = temperature.\n\t\t\tBit 5 = humidity.\n\t\t\tBit 6 = luminance.\n\t\t\tBit 7 = ultraviolet.\n\t\t\tNote: \n\t\t\tIf USB power, the Sensor will check the limit every 10 seconds. If battery power, the Sensor will check the limit when it is waken up. \n\t\t\t",
          },
          {
            genre: "config",
            index: "49",
            label: "Set the upper limit value of temperature sensor",
            type: "int",
            value: "71681",
            Help:
              "\n\t\t\tWhen the measurement is more than this upper limit, which will trigger to sent out a sensor report.\n\t\t\tHigh byte is the upper limit value. Low byte is the unit (0x01=Celsius, 0x02=Fahrenheit).\n\t\t\t1. When unit is Celsius.\n\t\t\tUpper limit range: -40.0 to 100.0 C (0xFE70 to 0x03E8).\n\t\t\tE.g. The default upper limit of EU/AU version is 28.0 C (0x0118), when the measurement is more than 28.0C, it will be triggered to send out a temperature sensor report.\n\t\t\t2. When unit is Fahrenheit.\n\t\t\tUpper limit range: -40.0 to 212.0 F (0xFE70 to 0x0848).\n\t\t\tE.g. The default upper limit of US version is 82.4F (0X0338), when the measurement is more than 82.4F, it will be triggered to send out a temperature sensor report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "50",
            label: "Set the lower limit value of temperature sensor",
            type: "int",
            value: "1",
            Help:
              "\n\t\t\tWhen the measurement is less than this lower limit, which will trigger to sent out a sensor report.\n\t\t\tHigh byte is the lower limit value. Low byte is the unit (0x01=Celsius, 0x02=Fahrenheit).\n\t\t\t1. When unit is Celsius.\n\t\t\tLower limit range: -40.0 to 100.0 C (0xFE70 to 0x03E8).\n\t\t\tE.g. The default lower limit of EU/AU version is 0 C (0x0000), when the measurement is less than 0C, it will be triggered to send out a temperature sensor report.\n\t\t\t2. When unit is Fahrenheit. \n\t\t\tUpper limit range: -40.0 to 212.0 F (0xFE70 to 0x0848).\n\t\t\tE.g. The default lower limit of US version is 32.0F (0x0140), when the measurement is less than 32.0F, it will be triggered to send out a temperature sensor report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "51",
            label: "Set the upper limit value of humidity sensor",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "60",
            Help:
              "\n\t\t\tWhen the measurement is more than this upper limit, which will trigger to sent out a sensor report.\n\t\t\tUpper limit range: 0 to 100%.\n\t\t\tE.g. The default upper limit is 60%, when the measurement is more than 60%, it will be triggered to send out a humidity sensor report. \n\t\t\t",
          },
          {
            genre: "config",
            index: "52",
            label: "Set the lower limit value of humidity sensor",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "50",
            Help:
              "\n\t\t\tWhen the measurement is less than this lower limit, which will trigger to sent out a sensor report.\n\t\t\tLower limit range: 0 to 100%.\n\t\t\tE.g. The default lower limit is 50%, when the measurement is less than 50%, it will be triggered to send out a humidity sensor report. \n\t\t\t",
          },
          {
            genre: "config",
            index: "53",
            label: "Set the upper limit value of Lighting sensor",
            max: "30000",
            min: "0",
            type: "short",
            units: "lux",
            value: "1000",
            Help:
              "\n\t\t\tWhen the measurement is more than this upper limit, which will trigger to sent out a sensor report.\n\t\t\tUpper limit range: 0 to 30000 Lux.\n\t\t\tE.g. The default upper limit is 1000Lux, when the measurement is more than 1000Lux, it will be triggered to send out a Lighting sensor report. \n\t\t\t",
          },
          {
            genre: "config",
            index: "54",
            label: "Set the lower limit value of Lighting sensor",
            max: "30000",
            min: "0",
            type: "short",
            units: "lux",
            value: "100",
            Help:
              "\n\t\t\tWhen the measurement is less than this lower limit, which will trigger to sent out a sensor report.\n\t\t\tLower limit range: 0 to 30000 Lux.\n\t\t\tE.g. The default lower limit is 100Lux, when the measurement is less than 100Lux, it will be triggered to send out a Lighting sensor report. \t\t\t\n\t\t\t",
          },
          {
            genre: "config",
            index: "55",
            label: "Set the upper limit value of ultraviolet sensor",
            max: "11",
            min: "1",
            type: "byte",
            units: "UV",
            value: "8",
            Help:
              "\n\t\t\t When the measurement is more than this upper limit, which will trigger to sent out a sensor report.\n\t\t\t Upper limit range: 1 to 11.\n\t\t\t E.g. The default upper limit is 8, when the measurement is more than 8, it will be triggered to send out a ultraviolet sensor report. \n\t\t\t",
          },
          {
            genre: "config",
            index: "56",
            label: "Set the lower limit value of ultraviolet sensor",
            max: "11",
            min: "1",
            type: "byte",
            units: "UV",
            value: "4",
            Help:
              "\n\t\t\t When the measurement is less than this upper limit, which will trigger to sent out a sensor report.\n\t\t\t Lower limit range: 1 to 11.\n\t\t\t E.g. The default lower limit is 4, when the measurement is less than 8, it will be triggered to send out a ultraviolet sensor report.\n\t\t\t",
          },
          {
            genre: "config",
            index: "57",
            label: "Set the recover limit value of temperature sensor",
            type: "short",
            value: "5121",
            Help:
              "\n\t\t\tNote:\n\t\t\t1. When the current measurement lower or equal (Upper limit - Recover limit), the upper limit report is enabled and then it would send out a sensor report when the next measurement is more than the upper limit. \n\t\t\tAfter that, the upper limit report would be disabled again until the measurement lower or equal (Upper limit - Recover limit).\n\t\t\t2. When the current measurement greater or equal (Lower limit + Recover limit), the lower limit report is enabled and then it would send out a sensor report when the next measurement is less than the lower limit. \n\t\t\tAfter that, the lower limit report would be disabled again until the measurement greater or equal (Lower limit + Recover limit).\n\t\t\t3. High byte is the recover limit value. Low byte is the unit (0x01=Celsius, 0x02=Fahrenheit).\n\t\t\t4. Recover limit range: 1.0 to 25.5 C/ F (0x0101 to 0xFF01 or 0x0102 to 0xFF02).\n\t\t\tE.g. The default recover limit value is 2.0 C/F (0x1401/0x1402), when the measurement is less than (Upper limit - 2), the upper limit report would be enabled one time or when the measurement is more than (Lower limit + 2), the lower limit report would be enabled one time.\n\t\t\t",
          },
          {
            genre: "config",
            index: "58",
            label: "Set the recover limit value of humidity sensor",
            max: "255",
            min: "1",
            type: "byte",
            units: "%",
            value: "5",
            Help:
              "\n\t\t\t Note:\n\t\t\t1. When the current measurement lower or equal (Upper limit - Recover limit), the upper limit report is enabled and then it would send out a sensor report when the next measurement is more than the upper limit. \n\t\t\tAfter that the upper limit report would be disabled again until the measurement lower or equal (Upper limit - Recover limit).\n\t\t\t2. When the current measurement greater or equal (Lower limit + Recover limit), the lower limit report is enabled and then it would send out a sensor report when the next measurement is less than the lower limit. \n\t\t\tAfter that the lower limit report would be disabled again until the measurement greater or equal(Lower limit + Recover limit).\n\t\t\t3. Recover limit range: 1 to 50% (0x01 to 0x32).\n\t\t\tE.g. The default recover limit value is 5%, when the measurement is less than (Upper limit - 5), the upper limit report would be enabled one time or when the measurement is more than (Lower limit + 5), the lower limit report would be enabled one time. \n\t\t\t",
          },
          {
            genre: "config",
            index: "59",
            label: "Set the recover limit value of Lighting sensor",
            max: "255",
            min: "1",
            type: "byte",
            units: "10xlux",
            value: "10",
            Help:
              "\n\t\t\tNote:\n\t\t\t1. When the current measurement lower or equal (Upper limit - Recover limit), the upper limit report is enabled and then it would send out a sensor report when the next measurement is more than the upper limit. \n\t\t\tAfter that the upper limit report would be disabled again until the measurement lower or equal (Upper limit - Recover limit).\n\t\t\t2. When the current measurement greater or equal (Lower limit + Recover limit), the lower limit report is enabled and then it would send out a sensor report when the next measurement is less than the lower limit. \n\t\t\tAfter that the lower limit report would be disabled again until the measurement greater or equal (Lower limit + Recover limit).\n\t\t\t3. Unit = 10*Recover limit (Lux)\n\t\t\t4. Recover limit range: 10 to 2550Lux (0x01 to 0xFF).\n\t\t\tE.g. The default recover limit value is 100 Lux, when the measurement is less than (Upper limit - 100), the upper limit report would be enabled one time or when the measurement is more than (Lower limit + 100), the lower limit report would be enabled one time.\n\t\t\t",
          },
          {
            genre: "config",
            index: "60",
            label: "Set the recover limit value of Ultraviolet sensor",
            max: "5",
            min: "1",
            type: "byte",
            units: "UV",
            value: "2",
            Help:
              "\n\t\t\t Note:\n\t\t\t1. When the current measurement lower or equal (Upper limit - Recover limit), the upper limit report is enabled and then it would send out a sensor report when the next measurement is more than the upper limit. \n\t\t\tAfter that the upper limit report would be disabled again until the measurement lower or equal (Upper limit - Recover limit).\n\t\t\t2. When the current measurement greater or equal (Lower limit + Recover limit), the lower limit report is enabled and then it would send out a sensor report when the next measurement is less than the lower limit. \n\t\t\tAfter that the lower limit report would be disabled again until the measurement greater or equal(Lower limit + Recover limit).\n\t\t\t3. Recover limit range: 1 to 50% (0x01 to 0x32).\n\t\t\tE.g. The default recover limit value is 5%, when the measurement is less than (Upper limit - 5), the upper limit report would be enabled one time or when the measurement is more than (Lower limit + 5), the lower limit report would be enabled one time. \n\t\t\t",
          },
          {
            genre: "config",
            index: "61",
            label: "Get the out-of-limit state of the Sensors",
            max: "255",
            min: "0",
            read_only: "true",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\tGet the out-of-limit state of the Sensors.\n\t\t\tBit mask = 0, within the limit.\n\t\t\tBit mask = 1, out of the limit.\n\t\t\tBit 0 = temperature.\n\t\t\tBit 1 = humidity.\n\t\t\tBit 2 = luminance.\n\t\t\tBit 3 = ultraviolet.\n\t\t\tThe above bit masks are used to indicate whether the current measurements of the Sensors are out of the lower limit.\n\t\t\tThe below bit masks are used to indicate whether the current measurements of the Sensors are out of the upper limit.\n\t\t\tBit 4 = temperature.\n\t\t\tBit 5 = humidity.\n\t\t\tBit 6 = luminance.\n\t\t\tBit 7 = ultraviolet.\n\t\t\t",
          },
          {
            genre: "config",
            index: "64",
            label: "Temperature scale",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Default value: Celsius for EU/AU version, Fahrenheit for US version.",
            Item: [
              { label: "Celsius", value: "1" },
              { label: "Fahrenheit", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "LED blinking report",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable the LED blinking for motion, wakeup, and sensor report.",
            Item: [
              { label: "Enable LED blinking", value: "0" },
              {
                label: "Disable LED blinking only when the PIR is triggered",
                value: "1",
              },
              {
                label:
                  "Completely disable LED for motion, wakeup, and sensor report",
                value: "2",
              },
            ],
          },
          {
            affects: "101,102,103",
            genre: "config",
            index: "100",
            label: "Reset Params 101-103 to Default",
            type: "button",
            write_only: "true",
            Help:
              "Reset The Reporting Group Configuration (101 to 103) to default",
          },
          {
            genre: "config",
            index: "101",
            label: "Group 1 Reports",
            type: "int",
            value: "241",
            Help:
              "Which reports need to send automatically in timing intervals for group 1.\n\t\t\t\tBitmask:\n\t\t\t\t10000000 - 128 - Luminance\n\t\t\t\t01000000 - 64 - Humidity\n\t\t\t\t00100000 - 32 - Temperature\n\t\t\t\t00010000 - 16 - Ultraviolet\n\t\t\t\t00000001 - 1 - Battery\n\t\t\t\t10100000 - 160 - Luminance and Temperature (32+128)\n\t\t\t\t11110001 - 241 - All (1+16+32+64+128)",
          },
          {
            genre: "config",
            index: "102",
            label: "Group 2 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 2.\n\t\t\t\tBitmask:\n\t\t\t\t10000000 - 128 - Luminance\n\t\t\t\t01000000 - 64 - Humidity\n\t\t\t\t00100000 - 32 - Temperature\n\t\t\t\t00010000 - 16 - Ultraviolet\n\t\t\t\t00000001 - 1 - Battery\n\t\t\t\t10100000 - 160 - Luminance and Temperature (32+128)\n\t\t\t\t11110001 - 241 - All (1+16+32+64+128)",
          },
          {
            genre: "config",
            index: "103",
            label: "Group 3 Reports",
            type: "int",
            value: "0",
            Help:
              "Which reports need to send automatically in timing intervals for group 3.\n\t\t\t\tBitmask:\n\t\t\t\t10000000 - 128 - Luminance\n\t\t\t\t01000000 - 64 - Humidity\n\t\t\t\t00100000 - 32 - Temperature\n\t\t\t\t00010000 - 16 - Ultraviolet\n\t\t\t\t00000001 - 1 - Battery\n\t\t\t\t10100000 - 160 - Luminance and Temperature (32+128)\n\t\t\t\t11110001 - 241 - All (1+16+32+64+128)",
          },
          {
            affects: "111,112,113",
            genre: "config",
            index: "110",
            label: "Reset Params 111-113 to Default",
            type: "button",
            write_only: "true",
            Help:
              "Reset The Reporting Group Interval Configuration (111 to 113) to default",
          },
          {
            genre: "config",
            index: "111",
            label: "Group 1 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "3600",
            Help:
              "The interval for sending reports for group 1.\n\t\t\tThe effective behavior of this setting depends on the device's power source:\n\t\t\t- If the device is on USB power, it will send the reports at the configured interval; set it to something low (~15-60 seconds) to get frequent updates from a powered device.\n\t\t\t- If the device is on battery, the sensor will never report in more often than its configured wake interval, regardless of what this setting is configured to; setting this to 3601 when the wake interval is 3600 would make this group report in every 7200 seconds. 240 seconds is the minimum wake interval, but will quickly use battery.",
          },
          {
            genre: "config",
            index: "112",
            label: "Group 2 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "3600",
            Help:
              "The interval for sending reports for group 2.\n\t\t\tThe effective behavior of this setting depends on the device's power source:\n\t\t\t- If the device is on USB power, it will send the reports at the configured interval; set it to something low (~15-60 seconds) to get frequent updates from a powered device.\n\t\t\t- If the device is on battery, the sensor will never report in more often than its configured wake interval, regardless of what this setting is configured to; setting this to 3601 when the wake interval is 3600 would make this group report in every 7200 seconds. 240 seconds is the minimum wake interval, but will quickly use battery.",
          },
          {
            genre: "config",
            index: "113",
            label: "Group 3 Interval",
            max: "2678400",
            min: "1",
            type: "int",
            units: "seconds",
            value: "3600",
            Help:
              "The interval for sending reports for group 3.\n\t\t\tThe effective behavior of this setting depends on the device's power source:\n\t\t\t- If the device is on USB power, it will send the reports at the configured interval; set it to something low (~15-60 seconds) to get frequent updates from a powered device.\n\t\t\t- If the device is on battery, the sensor will never report in more often than its configured wake interval, regardless of what this setting is configured to; setting this to 3601 when the wake interval is 3600 would make this group report in every 7200 seconds. 240 seconds is the minimum wake interval, but will quickly use battery.",
          },
          {
            genre: "config",
            index: "201",
            label: "Temperature Calibration",
            type: "short",
            value: "1",
            Help:
              "Temperature calibration (the available value range is [-128,127] or [-12.8C,12.7C]).\n\t\t\tNote:\n\t\t\t1. High byte is the calibration value. Low byte is the unit (0x01=Celsius,0x02=Fahrenheit)\n\t\t\t2. The calibration value (high byte) contains one decimal point. \n\t\t\tE.g. if the value is set to 20 (0x1401), the calibration value is 2.0C (EU/AU version) or if the value is set to 20 (0x1402), the calibration value is 2.0F (US version)\n\t\t\t3. The calibration value (high byte) = standard value - measure value. \n\t\t\tE.g. If measure value =25.3C and the standard value = 23.2C, so the calibration value= 23.2C - 25.3C= -2.1C (0xEB). \n\t\t\tIf the measure value =30.1C and the standard value = 33.2C, so the calibration value= 33.2C - 30.1C=3.1C (0x1F).\n\t\t\tDefault value: 1 for EU/AU version, 2 for US version.\n\t\t\t",
          },
          {
            genre: "config",
            index: "202",
            label: "Humidity Calibration",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The calibration value = standard value - measure value.\n\t\t\t(the available value range is [-50, 50]).\n\t\t\tIf measure value =80RH and the standard value = 75RH, so the calibration value= 75RH-80RH = -5RH (0xFB).\n\t\t\tIf the measure value =85RH and the standard value = 90RH, so the calibration value= 90RH-85RH = 5RH (0x05).  \n\t\t\t",
          },
          {
            genre: "config",
            index: "203",
            label: "Luminance Calibration",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "The calibration value = standard value - measure value. \n\t\t\t(the available value range is [-1000, 1000]).\n\t\t\tIf measure value =800Lux and the standard value = 750Lux, so the calibration value= 750-800 = -50 (0xFFCE). \n\t\t\tIf the measure value =850Lux and the standard value = 900Lux, so the calibration value= 900-850 = 50 (0x0032). \n\t\t\t",
          },
          {
            genre: "config",
            index: "204",
            label: "Ultraviolet Calibration",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "The calibration value = standard value measure value. \n\t\t\t(the available value range is [-10, 10]).\n\t\t\tIf measure value =9 and the standard value = 8, so the calibration value= 8-9 = -1 (0xFE). \n\t\t\tIf the measure value =7 and the standard value = 9, so the calibration value= 9-7 = 2 (0x02).  \n\t\t\t",
          },
          {
            genre: "config",
            index: "252",
            label: "Enable/disable Lock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n\t\t\t\tEnable/disable Lock Configuration\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

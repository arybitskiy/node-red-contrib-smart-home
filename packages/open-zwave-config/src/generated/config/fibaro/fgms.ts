import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1001:0800",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgms.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1048/",
            id: "1001",
            name: "ZWProductPage",
            type: "0800",
          },
          { text: "FIBARO Motion Sensor", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1001",
            name: "FrequencyName",
            type: "0800",
          },
          { text: "Motion Sensor", name: "Description" },
          {
            text: "FGMS-001 (EU)",
            id: "1001",
            name: "Identifier",
            type: "0800",
          },
          {
            text: "https://products.z-wavealliance.org/products/1076/",
            id: "2001",
            name: "ZWProductPage",
            type: "0800",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2001",
            name: "FrequencyName",
            type: "0800",
          },
          { text: "FGMS-001", id: "2001", name: "Identifier", type: "0800" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1048/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1076/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
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
            label: "Motion sensor's sensitivity",
            max: "255",
            min: "0",
            type: "byte",
            value: "10",
            Help:
              "\n\t\tThe lower the value, the more sensitive the PIR sensor.\n\t\tAvailable settings: 8 - 255\n\t\tDefault setting: 10\n\t",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Motion sensor's blind time (insensitivity)",
            max: "15",
            min: "0",
            type: "byte",
            value: "15",
            Help:
              '\n\t\tPeriod of time through which the PIR sensor is "blind" (insensitive) to\n\t\tmotion. After this time period the PIR sensor will be again able to\n\t\tdetect motion. The longer the insensitivity period, the longer the\n\t\tbattery life. If the sensor is required to detect motion quickly, the time\n\t\tperiod may be shortened. The time of insensitivity should be shorter\n\t\tthat the time period set in parameter 6.\n\t\tAvailable settings: 0 - 15\n\t\tFormula to calculate the time: time [s] = 0.5 x (value + 1)\n\t\tDefault setting: 15 (8 seconds)\n\t',
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "PIR sensor's pulse counter",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\tSets the number of moves required for the PIR sensor to report\n\t\tmotion. The lower the value, the less sensitive the PIR sensor. It's\n\t\tnot recommended to modify this parameter settings.\n\t\tAvailable settings: 0 - 3\n\t\tFormula to calculate the number of pulses: pulses = (value + 1)\n\t\tDefault setting: 1 (2 pulses)\n\t",
            Item: [
              { label: "1 pulse", value: "0" },
              { label: "2 pulses", value: "1" },
              { label: "3 pulses", value: "2" },
              { label: "4 pulses", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "PIR sensor's window time",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n\t\tPeriod of time during which the number of moves set in parameter 3\n\t\tmust be detected in order for the PIR sensor to report motion. The\n\t\thigher the value, the more sensitive the PIR sensor. It's not\n\t\trecommended to modify this parameter setting.\n\t\tAvailable settings: 0 - 3\n\t\tFormula to calculate the time: time [s] = 4 x (value + 1)\n\t\tDefault setting: 2 (12 seconds)\n\t",
            Item: [
              { label: "4 seconds", value: "0" },
              { label: "8 seconds", value: "1" },
              { label: "12 seconds", value: "2" },
              { label: "16 seconds", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Motion alarm cancellation delay",
            max: "65535",
            min: "0",
            type: "short",
            value: "30",
            Help:
              '\n\t\tMotion alarm will be cancelled in the main controller and the\n\t\tassociated devices after the period of time set in this parameter. Any\n\t\tmotion detected during the cancellation delay time countdown will\n\t\tresult in the countdown being restarted. In case of small values,\n\t\tbelow 10 seconds, the value of parameter 2 must be modified (PIR\n\t\tsensor\'s "Blind Time").\n\t\tAvailable settings: 1 - 65535\n\t\tDefault setting: 30 (30 seconds)\n\t',
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "PIR sensor operating mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\tThe parameter determines the part of day in which the PIR sensor\n\t\twill be active. This parameter influences only the motion reports and\n\t\tassociations. Tamper, light intensity and temperature measurements\n\t\twill be still active, regardless of this parameter settings.\n\t\tDefault setting: 0 (always active)\n\t",
            Item: [
              { label: "PIR sensor always active", value: "0" },
              { label: "PIR sensor active during the day only", value: "1" },
              { label: "PIR sensor active during the night only", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Night / day",
            max: "65535",
            min: "0",
            type: "short",
            value: "200",
            Help:
              "\n\t\tThe parameter defines the difference between night and day, in\n\t\tterms of light intensity, used in parameter 8.\n\t\tAvailable settings: 1 - 65535\n\t\tDefault setting: 200 (200 lux)\n\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Basic command class frames configuration",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\tThe parameter determines the command frames sent in 1-st\n\t\tassociation group, assigned to PIR sensor.\n\t\tValues of BASIC ON and BASIC OFF command frames may be\n\t\tmodified by dedicated parameters.\n\t\tDefault setting: 0 (ON and OFF)\n\t",
            Item: [
              {
                label:
                  "BASIC ON and BASIC OFF command frames sent in Basic Command Class.",
                value: "0",
              },
              {
                label:
                  "only the BASIC ON command frame sent in Basic Command Class.",
                value: "1",
              },
              {
                label:
                  "only the BASIC OFF command frame sent in Basic Command Class.",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "BASIC ON command frame value",
            max: "255",
            min: "0",
            type: "byte",
            value: "255",
            Help:
              "\n\t\tThe value of 255 allows to turn ON a device. In case of the Dimmer,\n\t\tthe value of 255 means turning ON at the last memorized state, e.g.\n\t\tthe Dimmer turned ON at 30% and turned OFF using the value of\n\t\t255, and then turned OFF, will be turned ON at 30%, i.e. the last\n\t\tmemorized state.\n\t\tAvailable settings: 0 - 255\n\t\tDefault setting: 255\n\t",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "BASIC OFF command frame value",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n\t\tThe command frame sent at the moment of motion alarm\n\t\tcancellation, after the cancellation delay time, specified in parameter\n\t\t6, has passed.\n\t\tThe value of 0 allows to turn a device OFF while the value of 255\n\t\tallows to turn ON a device. In case of the Dimmer, the value of 255\n\t\tmeans turning ON at the last memorized state, e.g. the Dimmer\n\t\tturned ON at 30% and turned OFF using the value of 255, and then\n\t\tturned OFF, will be turned ON at 30%, i.e. the last memorized state.\n\t\tAvailable settings: 0 - 255\n\t\tDefault setting: 0\n\t",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Tamper sensitivity",
            max: "122",
            min: "0",
            type: "byte",
            value: "15",
            Help:
              "\n\t\tThe parameter determines the changes in forces acting on the Fibaro\n\t\tMotion Sensor resulting in tamper alarm being reported - g-force\n\t\tacceleration.\n\t\tAvailable settings: 0 - 122 (0.08 - 2g; multiply by 0.016g; 0 = tamper inactive)\n\t\tDefault setting: 15 (0.224g)\n\t",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Tamper alarm cancellation delay",
            max: "65535",
            min: "0",
            type: "short",
            value: "30",
            Help:
              "\n\t\tTime period after which a tamper alarm will be cancelled. Another\n\t\ttampering detected during the countdown to cancellation will not\n\t\textend the delay.\n\t\tAvailable settings: 1 - 65535\n\t\tDefault setting: 30 (seconds)\n\t",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Tamper operating modes",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              '\n\t\tThe parameter determines the behaviour of tamper and how it\n\t\treports.\n\t\tTamper: Tamper alarm is reported in Sensor Alarm command class.\n\t\tCancellation: Cancellation is reported in Sensor Alarm command class after the time period set in parameter 22 (Tamper Alarm Cancellation Delay).\n\t\tOrientation: Sensor\'s orientation in space is reported in Fibaro Command Class after the time period set in parameter 22.\n\t\tVibration: The maximum level of vibrations recorded in the time period set\n\t\tin parameter 22 is reported. Reports stop being sent when the\n\t\tvibrations cease. The reports are sent in Sensor Alarm command\n\t\tclass. Value displayed in the "value" field (0 - 100) depends on the\n\t\tvibrations force. Reports to the association groups are sent using\n\t\tSensor Alarm command class.\n\t\tDefault setting: 0 (Tamper)\n\t',
            Item: [
              { label: "Tamper", value: "0" },
              { label: "Tamper + Cancellation", value: "1" },
              { label: "Tamper + Orientation", value: "2" },
              { label: "Tamper + Cancellation + Orientation", value: "3" },
              { label: "Vibration", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Tamper alarm broadcast mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\tThe parameter determines whether the tamper alarm frame will or\n\t\twill not be sent in broadcast mode. Alarm frames sent in broadcast\n\t\tmode may be received by all of the devices within communication\n\t\trange (if they accept such frames).\n\t\tDefault setting: 0\n\t",
            Item: [
              {
                label: "Tamper alarm is not sent in broadcast mode.",
                value: "0",
              },
              { label: "Tamper alarm sent in broadcast mode.", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Illumination report threshold",
            max: "65535",
            min: "0",
            type: "short",
            value: "200",
            Help:
              "\n\t\tThe parameter determines the change in light intensity level\n\t\tresulting in illumination report being sent to the main controller.\n\t\tAvailable settings: 0 - 65535 (1 - 65535 lux; 0 = reports are not\n\t\tsent)\n\t\tDefault setting: 200 (200 lux)\n\t",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Illumination reports interval",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\tTime interval between consecutive illumination reports. The reports\n\t\tare sent even if there are no changes in the light intensity.\n\t\tAvailable settings: 0 - 65535 (1 - 65535 seconds; 0 = reports are\n\t\tnot sent)\n\t\tDefault setting: 0 (no reports)\n\t\tNOTE\n\t\tFrequent reports will shorten the battery life.\n\t\tParameter value under 5 may result in blocking the\n\t\ttemperature reports.\n\t",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Temperature report threshold",
            max: "255",
            min: "0",
            type: "byte",
            value: "10",
            Help:
              "\n\t\tThe parameter determines the change in level of temperature\n\t\tresulting in temperature report being sent to the main controller.\n\t\tAvailable settings: 0 - 255 (0.1 - 25.5C; 0 = reports are not sent)\n\t\tDefault setting: 10 (1C)\n\t",
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "Interval of temperature measuring",
            max: "65535",
            min: "0",
            type: "short",
            value: "900",
            Help:
              "\n\t\tThe parameter determines how often the temperature will be\n\t\tmeasured. The shorter the time, the more frequently the temperature\n\t\twill be measured, but the battery life will shorten.\n\t\tAvailable settings: 0 - 65535 (1 - 65535 seconds; 0 = temperature\n\t\twill not be measured)\n\t\tDefault setting: 900 (900 seconds)\n\t\tNOTE\n\t\tFrequent reports will shorten the battery life.\n\t\tParameter value under 5 may result in blocking the\n\t\tillumination reports.\n\t",
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Temperature reports interval",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\tThe parameter determines how often the temperature reports will be\n\t\tsent to the main controller.\n\t\tAvailable settings: 0 - 65535 (1 - 65535 seconds; 0 = reports are not\n\t\tsent)\n\t\tDefault setting: 0\n\t",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Temperature offset",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\tThe value to be added to the actual temperature, measured by the\n\t\tsensor (temperature compensation).\n\t\tAvailable settings: 0 - 100 (0 to 100C) or 64536 - 65535 (-100 to -0.10C)\n\t\tDefault setting: 0\n\t",
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "LED signaling mode",
            max: "26",
            min: "0",
            size: "1",
            type: "list",
            value: "10",
            Help:
              "\n\t\tThe parameter determines the way in which LED behaves\n\t\tafter motion has been detected.\n\t\tValues 1 and from 3 to 9 = single long blink at the moment of reporting\n\t\tmotion. No other motion will be indicated until alarm is cancelled.\n\t\tValues from 10 to 18 = single long blink at the moment of reporting\n\t\tmotion and one short blink each time the motion is detected again.\n\t\tValues from 19 to 26 = single long blink at the moment of reporting\n\t\tmotion and two short blinks each time the motion is detected again.\n\t\tDefault setting: 10 (flashlight)\n\t",
            Item: [
              { label: "LED inactive.", value: "0" },
              {
                label:
                  "1 long blink, LED colour depends on the temperature. Set by parameters 86 and 87.",
                value: "1",
              },
              {
                label: "Flashlight mode - LED glows in white for 10 seconds.",
                value: "2",
              },
              { label: "Long blink White.", value: "3" },
              { label: "Long blink Red.", value: "4" },
              { label: "Long blink Green.", value: "5" },
              { label: "Long blink Blue.", value: "6" },
              { label: "Long blink Yellow.", value: "7" },
              { label: "Long blink Cyan.", value: "8" },
              { label: "Long blink Magenta.", value: "9" },
              {
                label:
                  "Long blink, then short blink, LED colour depends on the temperature. Set by parameters 86 and 87.",
                value: "10",
              },
              {
                label:
                  "Flashlight mode - LED glows in white through 10 seconds.  Each next detected motion extends the glowing by next 10 seconds.",
                value: "11",
              },
              { label: "Long blink, then short blinks White.", value: "12" },
              { label: "Long blink, then short blinks Red.", value: "13" },
              { label: "Long blink, then short blinks Green.", value: "14" },
              { label: "Long blink, then short blinks Blue.", value: "15" },
              { label: "Long blink, then short blinks Yellow.", value: "16" },
              { label: "Long blink, then short blinks Cyan", value: "17" },
              { label: "Long blink, then short blinks Magenta", value: "18" },
              {
                label:
                  "Long blink, then 2 short blinks, LED colour depends on the temperature. Set by parameters 86 and 87.",
                value: "19",
              },
              { label: "Long blink, then 2 short blinks White", value: "20" },
              { label: "Long blink, then 2 short blinks Red", value: "21" },
              { label: "Long blink, then 2 short blinks Green", value: "22" },
              { label: "Long blink, then 2 short blinks Blue", value: "23" },
              { label: "Long blink, then 2 short blinks Yellow", value: "24" },
              { label: "Long blink, then 2 short blinks Cyan", value: "25" },
              { label: "Long blink, then 2 short blinks Magenta", value: "26" },
            ],
          },
          {
            genre: "config",
            index: "81",
            instance: "1",
            label: "LED brightness",
            max: "100",
            min: "0",
            type: "byte",
            value: "50",
            Help:
              "\n\t\tThe parameter determines the brightness of LED when indicating\n\t\tmotion.\n\t\tAvailable settings: 0 - 100 (1 - 100%; 0 = brightness determined by\n\t\tthe ambient lighting - see parameters 82 and 83)\n\t\tDefault setting: 50\n\t",
          },
          {
            genre: "config",
            index: "82",
            instance: "1",
            label:
              "Ambient illumination level below which LED brightness is set to 1%",
            max: "65535",
            min: "0",
            type: "short",
            value: "100",
            Help:
              "\n\t\tThe parameter is relevant only when the parameter 81 is set to 0.\n\t\tAvailable settings: 0 to parameter 83 value\n\t\tDefault setting: 100 (100 lux)\n\t",
          },
          {
            genre: "config",
            index: "83",
            instance: "1",
            label:
              "Ambient illumination level above which LED brightness is set to 100%",
            max: "65535",
            min: "0",
            type: "short",
            value: "1000",
            Help:
              "\n\t\tThe parameter is relevant only when the parameter 81 is set to 0.\n\t\tAvailable settings: parameter 82 value to 65535\n\t\tDefault setting: 1000 (1000 lux)\n\t\tNOTE\n\t\tThe value of the parameter 83 must be higher than\n\t\tthe value of the parameter 82.\n\t",
          },
          {
            genre: "config",
            index: "86",
            instance: "1",
            label: "Minimum temperature resulting in blue LED illumination",
            max: "255",
            min: "0",
            type: "byte",
            value: "18",
            Help:
              "\n\t\tThis parameter is relevant only when parameter 80 has been\n\t\tproperly configured.\n\t\tAvailable settings: 0 to parameter 87 value (degrees Celsius)\n\t\tDefault setting: 18 (18C)\n\t",
          },
          {
            genre: "config",
            index: "87",
            instance: "1",
            label: "Maximum temperature resulting in red LED illumination",
            max: "255",
            min: "0",
            type: "byte",
            value: "28",
            Help:
              "\n\t\tThis parameter is relevant only when parameter 80 has been\n\t\tproperly configured.\n\t\tAvailable settings: parameter 86 value to 255 (degrees Celsius)\n\t\tDefault setting: 28 (28C)\n\t",
          },
          {
            genre: "config",
            index: "89",
            instance: "1",
            label: "LED indicating tamper alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\tIndicating mode resembles a police car (white, red and blue).\n\t\tDefault setting: 1 (on)\n\t",
            Item: [
              { label: "LED does not indicate tamper alarm.", value: "0" },
              { label: "LED indicates tamper alarm.", value: "1" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Basic Report", max_associations: "5" },
              { index: "2", label: "Tamper Alarm", max_associations: "5" },
              {
                auto: "true",
                index: "3",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1001:0801",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgmszw5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2762/",
            id: "1001",
            name: "ZWProductPage",
            type: "0801",
          },
          { text: "FGMS-001", id: "1001", name: "Identifier", type: "0801" },
          {
            text:
              "1.\tOpen the cover by turning it counter-clockwise.\n2.\tPlace the device within the direct range of your Z-Wave controller.\n3.\tSet the main controller in remove mode (see the controller’s manual).\n4.\tQuickly, three times press the B-button.\n5.\tWait for the removing process to end.\n6.\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          { text: "FIBARO Motion Sensor", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3379/FGMS-001-EN-T-v2.1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "FIBARO Motion Sensor is a universal, Z-Wave Plus compatible multi-sensor. This device has a built-in motion sensor, temperature sensor and light sensor. Additionally, through vibrations detection, it may detect tampering attempt or an earthquake. FIBARO Motion Sensor is battery powered, completely wireless, and its casing allows for quick and non-invasive installation on any surface. The eye of the sensor visually indicates motion, temperature level, operating mode or may inform about Z-Wave network range. The device can be used for lighting scenes and presence monitoring systems.",
            name: "Description",
          },
          {
            text:
              "1.\tOpen the cover by turning it counter-clockwise. \n2.\tPlace the device within the direct range of your Z-Wave controller.\n3.\tSet the main controller in (security/non-security) add mode (see the controller’s manual).\n4.\tQuickly, three times press the B-button.\n5.\tWait for the adding process to end.\n6.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.\tOpen the cover by turning it counter-clockwise. \n2.\tPress and hold the B-button.\n3.\tWait for visual indicator to glow yellow (2nd menu position).\n4.\tRelease the B-button.\n5.\tClick the B-button to confirm selection.\n6.\tAfter few seconds the device will be reset, which is signalled with the red, fading visual indicator colour.\nUse reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1001",
            name: "FrequencyName",
            type: "0801",
          },
          {
            text:
              "The Motion Sensor will wake up at a defined time interval and will always try to communicate with the main controller. There is a possibility to wake up the device manually by clicking the B-button.",
            name: "WakeupDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2763/",
            id: "2001",
            name: "ZWProductPage",
            type: "0801",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2001",
            name: "FrequencyName",
            type: "0801",
          },
          { text: "FGMS-001", id: "2001", name: "Identifier", type: "0801" },
          {
            text: "https://products.z-wavealliance.org/products/3336/",
            id: "1002",
            name: "ZWProductPage",
            type: "0801",
          },
          { text: "FGMS-001", id: "1002", name: "Identifier", type: "0801" },
          {
            text: "CEPT (Europe)",
            id: "1002",
            name: "FrequencyName",
            type: "0801",
          },
          {
            text: "https://products.z-wavealliance.org/products/3379/",
            id: "2002",
            name: "ZWProductPage",
            type: "0801",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2002",
            name: "FrequencyName",
            type: "0801",
          },
          { text: "FGMS-001", id: "2002", name: "Identifier", type: "0801" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1146/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1514/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2762/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2763/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3336/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3379/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Force Association Single Channel on Lifeline - https://github.com/OpenZWave/open-zwave/issues/1830",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "11 Jun 2019",
                revision: 10,
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
            label: "Motion detection - sensitivity",
            max: "255",
            min: "0",
            type: "byte",
            value: "15",
            Help:
              "\n\t\t\t\tThe lower the value, the more sensitive the PIR sensor is.\n\t\t\t\tAvailable settings: 8 - 255\n\t\t\t\tDefault setting: 15\n      ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Motion detection - blind time",
            max: "15",
            min: "0",
            type: "byte",
            value: "3",
            Help:
              "\n\t\t\t\tPIR sensor is blind (insensitive) to motion after last detection for the amount of time specified in this parameter.\n\t\t\t\tShorter time periods allow to detect motion more frequently, but the battery will be drained faster.\n\t\t\t\tAvailable settings: 0 - 15 (0.5-8 seconds).\n\t\t\t\tFormula to calculate the time: time [s] = 0.5 x (value+1))\n\t\t\t\tDefault setting: 3\n      ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Motion detection - pulse counter",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tThis parameter determines the number of moves required for the PIR sensor to report motion. The higher the value, the less sensitive the PIR sensor is.\n\t\t\t\tIt is not recommended to modify this parameter settings!\n\t\t\t\tDefault setting: 1 (2 pulses)\n      ",
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
            label: "Motion detection - window time",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n\t\t\t\tPeriod of time during which the number of moves set in parameter 3 must be detected in order for the PIR sensor to report motion.\n\t\t\t\tThe higher the value, the more sensitive the PIR sensor is.\n\t\t\t\tIt is not recommended to modify this parameter setting!\n\t\t\t\tDefault setting: 2 (12 seconds)\n      ",
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
            label: "Motion detection - alarm cancellation delay",
            max: "65535",
            min: "1",
            type: "short",
            units: "seconds",
            value: "30",
            Help:
              "\n\t\t\t\tTime period after which the motion alarm will be cancelled in the main controller and associated devices.\n\t\t\t\tAny motion detected during this period resets the timer.\n\t\t\t\tAvailable settings: 1 - 65535\n\t\t\t\tDefault setting: 30 (30 seconds)\n      ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Motion detection - operating mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter determines in which part of day the PIR sensor will be active.\n\t\t\t\tThis parameter influences only the motion reports and associations.\n\t\t\t\tTamper, light intensity and temperature measurements will be still active, regardless of this parameter settings.\n\t\t\t\tDefault setting: 0 (always active)\n      ",
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
            label: "Motion detection - night/day",
            max: "65535",
            min: "1",
            type: "short",
            units: "lux",
            value: "200",
            Help:
              "\n\t\t\t\tThis parameter defines the difference between night and day in terms of light intensity, used in parameter 8.\n\t\t\t\tAvailable settings: 1 - 65535\n\t\t\t\tDefault setting: 200 (200 lux)\n      ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "BASIC command class configuration",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter determines the command frames sent to 2nd association group (assigned to PIR sensor).\n\t\t\t\tDefault setting: 0 (ON and OFF)\n      ",
            Item: [
              { label: "BASIC On and OFF", value: "0" },
              { label: "Only the BASIC On", value: "1" },
              { label: "Only the BASIC OFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "BASIC ON command frame value",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n\t\t\t\tThe command frame sent at the moment of motion detection.\n\t\t\t\tFurther motion detections, during the cancellation time, will not result in sending the association.\n\t\t\t\tAvailable settings: 0 - 255\n\t\t\t\tDefault setting: 255\n      ",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "BASIC OFF command frame value",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tThe command frame sent at the moment of motion alarm cancellation, after cancellation delay time specified in parameter 6.\n\t\t\t\tAvailable settings: 0 - 255\n\t\t\t\tDefault setting: 0\n      ",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "15",
            min: "0",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "\n\t\t\t\tThis parameter defines how commands are sent in specified association groups: as secure or non-secure.\n\t\t\t\tParameter is active only in Z-Wave network security mode. It does not apply to 1st group Lifeline.\n\t\t\t\tAvailable settings 0 - 15:\n\t\t\t\t0 - none of the groups sent as secure 1 - 2nd group sent as secure.\n\t\t\t\t2 - 3rd group sent as secure.\n\t\t\t\t4 - 4th group sent as secure.\n\t\t\t\t8 - 5th group sent as secure.\n      ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Tamper - sensitivity",
            max: "121",
            min: "0",
            type: "byte",
            value: "20",
            Help:
              "\n\t\t\t\tThis parameter determines the change in force acting on the device, that will result in reporting tamper alarm - g-force acceleration.\n\t\t\t\tAvailable settings: 0 - 121 (0.08 - 2g; multiply by 0.016g; 0 = tamper inactive)\n\t\t\t\tDefault setting: 20 (0.4g)\n      ",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Tamper - alarm cancellation delay",
            max: "32767",
            min: "1",
            type: "short",
            units: "seconds",
            value: "30",
            Help:
              "\n\t\t\t\tTime period after which a tamper alarm will be cancelled in the main controller and associated devices.\n\t\t\t\tAny tampering detected during this period will not extend the delay.\n\t\t\t\tAvailable settings: 1 - 65535\n\t\t\t\tDefault setting: 30 (seconds)\n      ",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Tamper - operating modes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter determines function of the tamper and sent reports.\n\t\t\t\tIt is an advanced feature serving much more functions than just detection of tampering.\n\t\t\t\tDefault setting: 0 (Tamper)\n      ",
            Item: [
              { label: "Tamper only", value: "0" },
              { label: "Tamper and earthquake detector", value: "1" },
              { label: "Tamper and orientation in space", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Tamper - alarm cancellation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tThis parameter allows to disable cancellation of the tamper alarm.\n\t\t\t\tDefault setting: 0 (Tamper).\n      ",
            Item: [
              { label: "Do not send tamper cancellation report", value: "0" },
              { label: "Send tamper cancellation report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "Tamper alarm broadcast mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThe parameter determines whether the tamper alarm frame will or will not be sent in broadcast mode.\n\t\t\t\tAlarm frames sent in broadcast mode can be received by all of the devices within range (if they accept such frames), but not repeated by them.\n\t\t\t\tDefault setting: 0\n      ",
            Item: [
              {
                label: "Tamper alarm sent to 3rd association group",
                value: "0",
              },
              { label: "Tamper alarm sent in broadcast mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Tamper - backward compatible broadcast mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThe parameter determines whether the backward compatible tamper alarm frame will or will not be sent in broadcast mode.\n\t\t\t\tAlarm frames sent in broadcast mode can be received by all of the devices within range (if they accept such frames), but not repeated by them.\n\t\t\t\tThis parameter provides backward compatibility with controllers not supporting Z-Wave+.\n\t\t\t\tDefault setting: 0\n      ",
            Item: [
              {
                label:
                  "Backward compatible tamper alarm sent to 5th association group",
                value: "0",
              },
              {
                label:
                  "Backward compatible tamper alarm sent in broadcast mode",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Luminance report - threshold",
            max: "32767",
            min: "0",
            type: "short",
            units: "lux",
            value: "200",
            Help:
              "\n\t\t\t\tThis parameter determines the change in light intensity level resulting in luminance report being sent to the main controller.\n\t\t\t\tAvailable settings:\n\t\t\t\t0 - reports are not sent.\n\t\t\t\t1-32767 (luminance in lux).\n\t\t\t\tDefault setting: 200 (200 lux).\n      ",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Luminance reports - interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t\t\tTime interval between consecutive luminance reports.\n\t\t\t\tThe reports are sent even if there is no change in the light intensity.\n\t\t\t\tAvailable settings: 0 - 32767.\n\t\t\t\t0 - periodical reports are not sent.\n\t\t\t\t1-32767 (in seconds).\n      ",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Temperature report - threshold",
            max: "255",
            min: "0",
            type: "short",
            value: "10",
            Help:
              "\n\t\t\t\tThis parameter determines the change in measured temperature that will result in new temperature report being sent to the main controller.\n\t\t\t\tAvailable settings: 0 - 255 (0.1 - 25.5C; 0 = reports are not sent)\n\t\t\t\tDefault setting: 10 (1C)\n      ",
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "Temperature measuring - interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "seconds",
            value: "900",
            Help:
              "\n\t\t\t\tTime interval between consecutive temperature measurements.\n\t\t\t\tThe shorter the time, the more frequently the temperature will be measured, but the battery life will shorten.\n\t\t\t\tAvailable settings: 0 - 32767 (1 - 32767 seconds; 0 = temperature is not measured)\n\t\t\t\tDefault setting: 900 (900 seconds).\n      ",
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Temperature report - interval",
            max: "32767",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t\t\tTime interval between consecutive temperature reports. The reports are sent even if there is no change in the temperature.\n\t\t\t\tAvailable settings: 0 - 32767 (1 - 32767 seconds; 0 = periodical reports are not sent)\n\t\t\t\tDefault setting: 0\n      ",
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
              "\n\t\t\t\tThe value to be added to the actual temperature, measured by the sensor (temperature compensation).\n\t\t\t\tAvailable settings: 0 - 100 (0 to 100C) or 64536 - 65535 (-100 to -0.10C)\n\t\t\t\tDefault setting: 0\n      ",
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "Visual LED indicator - signalling mode",
            max: "26",
            min: "0",
            size: "1",
            type: "list",
            value: "10",
            Help:
              "\n\t\t\t\tThis parameter determines the way in which visual indicator behaves after motion has been detected.\n\t\t\t\tDefault setting: 10 (Flashlight mode)\n      ",
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
            label: "Visual LED indicator - brightness",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "50",
            Help:
              "\n\t\t\t\tThis parameter determines the brightness of the visual LED indicator when indicating motion.\n\t\t\t\tAvailable settings: 0 - brightness determined by the luminance (parameters 82 and 83).\n\t\t\t\t1-100 (1-100%)\n\t\t\t\tDefault setting: 50 (50 %)\n      ",
          },
          {
            genre: "config",
            index: "82",
            instance: "1",
            label:
              "Visual LED indicator - luminance for low indicator brightness",
            max: "32767",
            min: "0",
            type: "short",
            units: "lux",
            value: "100",
            Help:
              "\n\t\t\t\tLight intensity level below which brightness of visual indicator is set to 1%.\n\t\t\t\tAvailable settings: 0 to value of parameter 83 (in lux).\n\t\t\t\tDefault setting: 100.\n      ",
          },
          {
            genre: "config",
            index: "83",
            instance: "1",
            label:
              "Visual LED indicator - luminance for high indicator brightness",
            max: "32767",
            min: "0",
            type: "short",
            units: "lux",
            value: "1000",
            Help:
              "\n\t\t\t\tLight intensity level above which brightness of visual indicator is set to 100%.\n\t\t\t\tAvailable settings: value of parameter 82 to 32767 (in lux)\n\t\t\t\tDefault setting: 1000 (1000 lux)\n\t\t\t\tNOTE\n\t\t\t\tThe value of the parameter 83 must be higher than the value of the parameter 82.\n      ",
          },
          {
            genre: "config",
            index: "86",
            instance: "1",
            label: "Visual LED indicator - temperature for blue colour",
            max: "255",
            min: "0",
            type: "byte",
            units: "Celsius",
            value: "18",
            Help:
              "\n\t\t\t\tThis parameter is determines minimal temperature that will result in blue visual indicator colour.\n\t\t\t\tRelevant only when parameter 80 has been properly configured.\n\t\t\t\tAvailable settings: 0 to value of parameter 87 (in Celsius degree)\n\t\t\t\tDefault setting: 18 (18C)\n      ",
          },
          {
            genre: "config",
            index: "87",
            instance: "1",
            label: "Visual LED indicator - temperature for red colour",
            max: "255",
            min: "0",
            type: "byte",
            units: "Celsius",
            value: "28",
            Help:
              "\n\t\t\t\tThis parameter is determines minimal temperature that will result in red visual indicator colour.\n\t\t\t\tRelevant only when parameter 80 has been properly configured.\n\t\t\t\tAvailable settings: value of parameter 86 to 255 (in Celsius degree)\n\t\t\t\tDefault setting: 28 (28C)\n      ",
          },
          {
            genre: "config",
            index: "89",
            instance: "1",
            label: "Visual LED indicator - tamper alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\t\tIndicating mode resembles a police car (white, red and blue).\n\t\t\t\tDefault setting: 1 (on)\n      ",
            Item: [
              { label: "Tamper alarm is not indicated", value: "0" },
              { label: "Tamper alarm is indicated", value: "1" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "142",
        Compatibility: [{ ForceInstances: [false] }],
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Motion", max_associations: "5" },
              { index: "3", label: "Tamper", max_associations: "5" },
              { index: "4", label: "Motion BC", max_associations: "5" },
              { index: "5", label: "Tamper BC", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

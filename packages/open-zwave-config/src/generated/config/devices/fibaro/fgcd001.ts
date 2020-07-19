import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:1201",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgcd001.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2336/",
            id: "1000",
            name: "ZWProductPage",
            type: "1201",
          },
          { text: "FIBARO CO Sensor", name: "Name" },
          {
            text:
              "The CO Sensor needs to be woken up to receive information about the new configuration from the Z-Wave controller, like parameters and associations. To wake up the sensor manually click the button located on the casing.",
            name: "WakeupDescription",
          },
          { text: "FGCD-001", id: "1000", name: "Identifier", type: "1201" },
          {
            text:
              "1)\tPress and hold the button.\n2)\tRelease the button when LED indicator glows white.\n3)\tClick the button when LED indicator glows yellow.\n4)\tAfter few seconds the device will be reset (confirmed by red LED indicator).\n\nResetting the device is not the recommended way of removing the device from the Z-Wave network. use the reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1)\tPlace the device within direct range of the Z-Wave controller.\n2)\tSet the main Z-Wave controller in (security/non-security) adding mode (see the controller’s manual).\n3)\tQuickly, triple click the button located on the casing.\n4)\tWait for the device to be added into the system.\n5)\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "1)\tPlace the device within direct range of the Z-Wave controller.\n2)\tSet the main Z-Wave controller in remove mode (see the controller’s manual).\n3)\tQuickly, triple click the button located on the casing.\n4)\tWait for the removing process to end.\n5)\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3000/FGCD-001-EN-T-v1.1.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1201",
          },
          {
            text:
              "FIBARO CO Sensor is an ultra-light, compact, battery-powered carbon monoxide detector, designed to be placed on a wall. Its high sensitivity allows to detect the presence of the carbon monoxide (CO) gas at the early stage in order to prevent carbon monoxide poisoning. Alarm is signalled with a built-in siren, blinking LED indicator and by sending commands to Z-Wave network devices. Additionally, the device is equipped with a temperature sensor.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/3000/",
            id: "1001",
            name: "ZWProductPage",
            type: "1201",
          },
          {
            text: "CEPT (Europe)",
            id: "1001",
            name: "FrequencyName",
            type: "1201",
          },
          { text: "FGCD-001", id: "1001", name: "Identifier", type: "1201" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2336/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3000/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "2",
            instance: "1",
            label: "Z-Wave notifications",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to set the actions which result in sending notifications to the Z-Wave network controller.\n\t\t\t",
            Item: [
              { label: "All notifications disabled", value: "0" },
              { label: "Enclosure opening notification enabled", value: "1" },
              {
                label: "Exceeding temperature threshold notification enabled",
                value: "2",
              },
              { label: "All notifications enabled", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "LED diode indications",
            max: "7",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to set the actions which result in LED diode indications.\n\t\t\t\t0=All actions disabled.\n\t\t\t\t1=Tampering (opened casing).\n\t\t\t\t2=Exceeding the temperature.\n\t\t\t\t4=Lack of Z-Wave range.\n\t\t\t\tThis parameter does not apply to the most important actions, such as CO Alarm, Malfunction Alarm and Low Battery Alarm.\n\t\t\t\tNOTE: Parameter 3 values may be combined, e.g. 1+2+4=7 means that all actions will be active.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Acoustic signals",
            max: "7",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter allows to set the actions which result in acoustic signals.\n\t\t\t\t0=All actions disabled.\n\t\t\t\t1=Tampering (opened casing).\n\t\t\t\t2=Exceeding the temperature.\n\t\t\t\t4=Lack of Z-Wave range.\n\t\t\t\tThis parameter does not apply to the most important actions, such as CO Alarm, Malfunction Alarm and Low Battery Alarm.\n\t\t\t\tNOTE: Parameter 4 values may be combined, e.g. 1+2+4=7 means that all actions will be active.\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "63",
            min: "0",
            type: "byte",
            value: "63",
            Help:
              "\n\t\t\t\tParameter defines how commands are sent in specified association groups: as secure or non-secure. \n\t\t\t\tParameter is active only in Z-Wave network security mode. \n\t\t\t\tIt does not apply to 1st Lifeline association group.\n\t\t\t\tAvailable settings:\n\t\t\t\t0 - all groups sent as non-secure\n\t\t\t\t1 - 2nd group sent as secure.\n\t\t\t\t2 - 3rd group sent as secure.\n\t\t\t\t4 - 4th group sent as secure.\n\t\t\t\t8 - 5th group sent as secure.\n\t\t\t\t16 - 6th group sent as secure.\n\t\t\t\t32 - 7th group sent as secure.\n\t\t\t\tDefault setting: 63.\n\t\t\t\tNOTE Parameter 7 values may be combined, e.g. 1+2=3 means that 2nd and 3rd group are sent as secure.\n\t\t\t",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Commands sent to 2nd association group (CO Alarm)",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines which frames will be sent in the 2-nd Association Group (CO ALARM).",
            Item: [
              { label: "BASIC ON", value: "1" },
              { label: "BASIC OFF", value: "2" },
              { label: "BASIC ON and OFF", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Value of BASIC ON command sent to 2nd association group",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "This parameter defines the value of BASIC ON command sent to devices in 2nd association group after the CO Alarm activation.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Value of BASIC OFF command sent to 2nd association group",
            max: "255",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "This parameter defines the value of BASIC OFF command sent to devices in 2nd association group after the CO Alarm cancellation.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Commands sent to 4th association group (CO Level)",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tThis parameter defines commands sent to devices associated in 4th association group (CO Level). \n\t\t\t\tValues of specified commands may be set in parameters 16 and 19.\n\t\t\t",
            Item: [
              { label: "BASIC ON", value: "1" },
              { label: "BASIC OFF", value: "2" },
              { label: "BASIC ON and OFF", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label:
              "CO level required for sending BASIC ON command to 4th association group",
            max: "400",
            min: "20",
            type: "short",
            units: "ppm",
            value: "40",
            Help:
              "\n\t\t\t\tThis parameter defines the minimum level of CO concentration whichexceeding will result in starting the timer set in parameter 15. \n\t\t\t\tAvailable settings: 20 - 400  CO concentration level in ppm\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label:
              "Time required for sending BASIC ON command to 4th association group",
            max: "2880",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter defines the time during which the level of CO concentration should remain above the value set in parameter 14 to send the BASIC ON command to 4th association group.\n\t\t\t\tAvailable settings: 0 - immediate sending of BASIC ON command 1-2880 (30s - 24h, in 30s steps)\n\t\t\t\tDefault setting: 0\n\t\t\t",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Value of BASIC ON command sent to 4th association group",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "\n\t\t\t\tThis parameter defines the value of BASIC ON command sent to devices in 4th association group after exceeding the CO level set in parameter 14 through the time set in parameter 15.\n\t\t\t\tAvailable settings: 0-99 or 255.\n\t\t\t\tDefault setting: 255 (turn on)\n\t\t\t",
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label:
              "CO Level required for sending BASIC OFF command to 4th association group",
            max: "400",
            min: "10",
            type: "short",
            units: "ppm",
            value: "25",
            Help:
              "\n\t\t\t\tThis parameter defines the level of CO concentration below which falling will result in sending the BASIC OFF command to 4th association group.\n\t\t\t\tAvailable settings: 10-400 - CO concentration level in ppm.\n\t\t\t\tDefault setting: 25 (25 ppm)\n\t\t\t",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label:
              "Time required for sending BASIC OFF command to 4th association group",
            max: "2880",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter defines the time during which the level of CO concentration should remain below the value set in parameter 17 to send the BASIC OFF command to 4th association group.\n\t\t\t\tAvailable settings: 0 - immediate sending of BASIC OFF command 1-2880 (30s - 24h, in 30s steps)\n\t\t\t\tDefault setting: 0\n\t\t\t",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Value of BASIC OFF command sent to 4th association group",
            max: "255",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter defines the value of BASIC OFF command sent to devices in 4th association group after falling below the CO level set in parameter 17.\n\t\t\t\tAvailable settings: 0-99 or 255\n\t\t\t\tDefault setting: 0 (turn off)\n\t\t\t",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Temperature report interval",
            max: "1440",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tTime interval (in seconds) between consecutive reports of temperature (done by built-in temperature sensor). \n\t\t\t\tShort time interval means more frequent communication, which results in shortened battery life.\n\t\t\t\tAvailable settings: 0 - no periodical reports 10-1440 (5min - 12h, in 30s steps)\n\t\t\t\tDefault setting: 0\n\t\t\t",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Temperature report hysteresis",
            max: "20",
            min: "1",
            type: "byte",
            value: "2",
            Help:
              "\n\t\t\t\tThis parameter defines a minimum change in temperature resulting in a report being sent to the main Z-Wave controller.\n\t\t\t\tAvailable settings: 1-20 (0.5C - 10C, each 0.5C)\n\t\t\t\tDefault setting: 2 (1C) P",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Threshold of exceeding the temperature",
            max: "85",
            min: "1",
            size: "1",
            type: "byte",
            units: "Celsius",
            value: "55",
            Help:
              "\n\t\t\t\tThis parameter defines the temperature level, which exceeding will result in sending actions set in parameters 2, 3 and 4.\n\t\t\t\tAvailable settings: 1-85 (1C - 85C, each 1C)\n\t\t\t\tDefault setting: 55 (55C)\n\t\t\t",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "CO meter activation",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "This parameter activates reporting the value of CO concentration level to the main Z-Wave controller.",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "CO level reporting hysteresis",
            max: "6",
            min: "2",
            size: "1",
            type: "list",
            units: "ppm",
            value: "2",
            Help:
              "\n\t\t\t\tThis parameter defines a minimum change in CO concentration level which results in sending a new value to the main Z-Wave controller.\n\t\t\t",
            Item: [
              { label: "10", value: "2" },
              { label: "15", value: "3" },
              { label: "20", value: "4" },
              { label: "25", value: "5" },
              { label: "30", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Threshold of CO meter activation",
            max: "255",
            min: "10",
            type: "short",
            units: "ppm",
            value: "30",
            Help:
              "\n\t\t\t\tThis parameter defines the CO concentration level, which exceeding will result in sending a new value to the main Z-Wave controller, according to parameter 25 settings. \n\t\t\t\tAdjusting the value allows to get the accurate data in case of danger and helps to save the battery in normal conditions.\n\t\t\t\tAvailable settings: 10-255 (ppm)\n\t\t\t\tDefault setting: 30 (30 ppm)\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "7",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "CO Alarm", max_associations: "5" },
              { index: "3", label: "CO Alarm", max_associations: "5" },
              { index: "4", label: "CO Level", max_associations: "5" },
              { index: "5", label: "Tamper Alarm", max_associations: "5" },
              { index: "6", label: "CO Alarm", max_associations: "5" },
              { index: "7", label: "Tamper Alarm BC", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

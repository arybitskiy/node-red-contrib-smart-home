import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:007A:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw122.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2407/",
            id: "007A",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "Press and hold the Action Button that you can find on the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action Button that you can find on the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action Button that you can find on the product.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Pressing the Action Button once will trigger sending the Wake up notification command. If press and hold the Z-Wave button for 3 seconds, the Water Sensor will wake up for 10 minutes.",
            name: "WakeupDescription",
          },
          { text: "Water Sensor 6", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2437/Aeon Labs Water Sensor 6 manual.pdf",
            name: "ProductManual",
          },
          { text: "ZW122-A", id: "007A", name: "Identifier", type: "0102" },
          {
            text:
              "Aeotec by Aeon Labs Water Sensor 6 brings intelligence to a new level, one that is suited to both safety and convenience. It contains 4 sensing points, which would be more accurately to detect the presence and absence of water or detect whether there is water leak in some places of your home. The Water Sensor 6 has an inbuilt buzzer that can play alarm sounds to let you know when the water is detected.\n\nThe Water Sensor 6 is also a security Z-Wave device that supports Over The Air (OTA) for firmware updates.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "007A",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text: "https://products.z-wavealliance.org/products/2411/",
            id: "007A",
            name: "ZWProductPage",
            type: "0202",
          },
          {
            text: "Australia / New Zealand",
            id: "007A",
            name: "FrequencyName",
            type: "0202",
          },
          { text: "ZW122-B", id: "007A", name: "Identifier", type: "0202" },
          {
            text: "https://products.z-wavealliance.org/products/2437/",
            id: "007A",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "ZW122-C", id: "007A", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe)",
            id: "007A",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2407/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2411/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2437/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 10,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      { action: "remove", id: "48" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Waking up for 10 minutes when re-power on",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable waking up for 10 minutes when re-power on (battery mode) the Water Sensor.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Timeout of awake after the Wake Up CC is sent out",
            max: "127",
            min: "8",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "\n\t\t\t\tSet the timeout of awake after the Wake Up CC is sent out.\n\t\t\t\tAvailable rang is 8 to 127 seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Current power mode",
            max: "258",
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
              { label: "USB power, always awake state", value: "2" },
              {
                label: "Battery power, sleeping mode after re-power on",
                value: "256",
              },
              {
                label:
                  "Battery power, keep awake for 10 minutes after re-power on",
                value: "257",
              },
              { label: "Battery power, always awake state", value: "258" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Alarm time for the Buzzer",
            max: "2147483647",
            min: "655360",
            size: "4",
            type: "int",
            value: "1968650",
            Help:
              "\n\t\t\t\tSet the alarm time for the Buzzer when the sensor is triggered.\n\t\t\t\t1 to 255 Repeated cycle of Buzzer alarm.\n\t\t\t\t256 to 65535 the time of Buzzer keeping ON state (MSB).\n\t\t\t\t65536 to 2147483647 The time of Buzzer keeping OFF state.\n\t\t\t",
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "Set the low battery value",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            units: "%",
            value: "20",
            Help: "10% to 50%",
          },
          {
            genre: "config",
            index: "48",
            instance: "1",
            label: "Sensor report",
            max: "55",
            min: "0",
            size: "1",
            type: "byte",
            value: "55",
            Help:
              "Enable/disable the sensor report:\n\t\t\t\tBit 7 - Bit 6 - Bit 5 Notification Report for Overheat alarm.\n\t\t\t\tBit 4 Notification Report for Under heat alarm.\n\t\t\t\tBit 3 - Bit 2 Configuration Report for Tilt sensor.\n\t\t\t\tBit 1 Notification Report for Vibration event.\n\t\t\t\tBit 0 Notification Report for Water Leak event.\n\t\t\t\tNote: if the value = 1+2+4+16+32=55, which means if any sensor will report alarm.\n\t\t\t",
          },
          {
            genre: "config",
            index: "49",
            instance: "1",
            label: "Upper limit value",
            max: "2147483647",
            min: "65536",
            size: "4",
            type: "int",
            value: "26214400",
            Help:
              "\n\t\t\t\tSet the upper limit value (overheat).\n\t\t\t\t0 Celsius unit\n\t\t\t\t1 Fahrenheit unit\n\t\t\t\t65536 to 2147483647 Temperature value.\n\t\t\t\tDefault: 0x01900000 => 40.0C\n\t\t\t",
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Lower limit value",
            max: "2147483647",
            min: "65536",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n\t\t\t\tSet the lower limit value (under heat).\n\t\t\t\t0 Celsius unit\n\t\t\t\t1 Fahrenheit unit\n\t\t\t\t65536 to 2147483647 Temperature value\n\t\t\t",
          },
          {
            genre: "config",
            index: "57",
            instance: "1",
            label: "Recover limit value of temperature sensor",
            max: "4080",
            min: "100",
            size: "2",
            type: "short",
            value: "5120",
            Help:
              "\n\t\t\t\tSet the recover limit value of temperature sensor.\n\t\t\t\tNote:\n\t\t\t\t1. When the current measurement less than or equal (Upper limit - Recover limit), the upper limit report is enabled and then it would send out a sensor report when the next measurement is more than the upper limit.\n\t\t\t\tAfter that the upper limit report would be disabled again until the measurement less than or equal (Upper limit - Recover limit).\n\t\t\t\t2. When the current measurement greater than or equal (Lower limit + Recover limit), the lower limit report is enabled and then it would send out a sensor report when the next measurement is less than the lower limit.\n\t\t\t\tAfter that the lower limit report would be disabled again until the measurement >= (Lower limit + Recover limit).\n\t\t\t\t3. High byte is the recover limit value. Low byte is the unit (0x00=Celsius, 0x01=Fahrenheit).\n\t\t\t\t4. Recover limit range: 1.0 to 25.5 C/F (0x0100 to 0xFF00 or 0x0101 to 0xFF01).\n\t\t\t\tE.g. The default recover limit value is 2.0 C/F (0x1400/0x1401), when the measurement is less than (Upper limit - 2), the upper limit report would be enabled one time or when the measurement is more than (Lower limit + 2), the lower limit report would be enabled one time.\n\t\t\t",
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Unit of the automatic temperature report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set the default unit of the automatic temperature report in parameter 101-103",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "84",
            instance: "1",
            label: "Get the state of tilt sensor",
            max: "1",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help: "Get the state of tilt sensor",
            Item: [
              { label: "Horizontal", value: "0" },
              { label: "Vertical", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "86",
            instance: "1",
            label: "Buzzer",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable/ disable the buzzer.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            bitmask: "55",
            genre: "config",
            index: "87",
            instance: "1",
            label: "Sensor is triggered the buzzer will alarm",
            max: "55",
            min: "0",
            size: "4",
            type: "bitset",
            value: "55",
            Help: "What Sensors Trigger the Buzzer",
            BitSet: [
              {
                id: "1",
                Label: "Water Leak",
                Help: "If the Water leak is triggered, the buzzer will alarm.",
              },
              {
                id: "2",
                Label: "Vibration",
                Help: "If the vibration is triggered, the buzzer will alarm.",
              },
              {
                id: "3",
                Label: "Tilt Sensor",
                Help: "If the Tilt Sensor is triggered, the buzzer will alarm.",
              },
              {
                id: "5",
                Label: "UnderHeat",
                Help:
                  "If the Under Heat Temperature is triggered, the buzzer will alarm.",
              },
              {
                id: "6",
                Label: "OverHeat",
                Help:
                  "If the Over Heat Temperature is triggered, the buzzer will alarm.",
              },
            ],
          },
          {
            genre: "config",
            index: "88",
            instance: "1",
            label: "Probe 1 Basic Set on grp 3",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "To set which value of the Basic Set will be sent to the associated nodes in association Group 3 when the Sensor probe 1 is triggered.",
            Item: [
              { label: "Send nothing", value: "0" },
              { label: "Presence/absence of water 0xFF/0x00", value: "1" },
              { label: "Presence/absence of water 0x00/0xFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "89",
            instance: "1",
            label: "Probe 2 Basic Set on grp 4",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "To set which value of the Basic Set will be sent to the associated nodes in association Group 4 when the Sensor probe 2 is triggered.",
            Item: [
              { label: "Send nothing", value: "0" },
              { label: "Presence/absence of water 0xFF/0x00", value: "1" },
              { label: "Presence/absence of water 0x00/0xFF", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "94",
            instance: "1",
            label: "Battery report selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "To set which power source level is reported via the Battery CC.",
            Item: [
              { label: "USB power level", value: "0" },
              { label: "CR123A battery level", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label: "Unsolicited report",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tTo set what unsolicited report would be sent to the Lifeline group.\n\t\t\t",
            Item: [
              { label: "Send Nothing", value: "0" },
              { label: "Battery Report", value: "1" },
              { label: "Multilevel sensor report for temperature", value: "2" },
              {
                label:
                  "Battery Report and Multilevel sensor report for temperature",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "Unsolicited report interval time",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "3600",
            Help:
              "\n\t\t\t\tTo set the interval time of sending reports in Report group 1\n\t\t\t",
          },
          {
            genre: "config",
            index: "135",
            instance: "1",
            label: "Water leak event report selection",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "To set which sensor report can be sent when the water leak event is triggered and if the receiving device is a non-multichannel device.",
            Item: [
              { label: "Send nothing", value: "0" },
              {
                label: "Send notification report to association group 1",
                value: "1",
              },
              {
                label: "Send configuration 0x88 report to association group 2",
                value: "2",
              },
              {
                label:
                  "Send notification report to association group 1 and Send configuration 0x88 report to association group 2",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "136",
            instance: "1",
            label: "Report Type to Send",
            max: "2",
            min: "0",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tWhen the parameter 0x87 is set to 2 or 3, it can get the sensor probes status through this configuration value.\n\t\t\t",
            Item: [
              {
                label: "Absence of water is triggered by probe 1 and 2",
                value: "0",
              },
              {
                label: "Presence of water is triggered by probe 1",
                value: "1",
              },
              {
                label: "Presence of water is triggered by probe 2",
                value: "2",
              },
              {
                label: "Presence of water is triggered by probe 1 and 2",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "201",
            instance: "1",
            label: "Temperature sensor calibration",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t\tTemperature calibration (the available value range is [-128, 127] or [-12.8C, 12.7C]).\n\t\t\t\tNote:\n\t\t\t\t1. High byte is the calibration value. Low byte is the unit (0x00=Celsius, 0x01=Fahrenheit).\n\t\t\t\t2. The calibration value (high byte) contains one decimal point. E.g.\n\t\t\t\tif the value is set to 20 (0x1400), the calibration value is 2.0 C (EU/AU version) or if the value is set to 20 (0x1401), the calibration value is 2.0 F(US version).\n\t\t\t\t3. The calibration value (high byte) = standard value - measure value.\n\t\t\t\tE.g. If measure value =25.3C and the standard value = 23.2C, so the calibration value= 23.2C - 25.3C= -2.1C (0xEB).\n\t\t\t\tIf the measure value =30.1C and the standard value = 33.2C, so the calibration value= 33.2C - 30.1C=3.1C (0x1F).\n\t\t\t",
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
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
              { label: "Normal", value: "0" },
              { label: "Reset to factory default setting", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Send the configuration parameter 0x88",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Send Basic Set when the Sensor probe 1 is triggered",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Send Basic Set when the Sensor probe 2 is triggered",
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

import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      { id: "156", Compatibility: [{ GetSupported: [false] }] },
      { id: "139", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Smoke alarm cancellation delay",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "The time between when the smoke disappears and the Fibaro Smoke Sensor stops sending the alarm signal. Available settings: 0 to 17280, 65535 (5s multiplier) [5s-24h]. 0: no delay, immediate cancellation, 65535: alarm cancellation inactive - Smoke Sensor will keep indicating smoke alarm after the smoke will have disappeared. The smoke alarm can be only ceased manually, by entering 2nd menu level (see section XIII). Default setting: 0",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label:
              "LED indicator and acoustic alarm turned ON / OFF at any alarm type",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "Allows for deactivating the LED indicator and the acoustic alarm, in case of detecting an alarm of any type. This doesn't affect the communication with the Z-Wave network controller, i.e. the sensor will keep sending alarms, reports and all information to the associated devices. Modifying this parameter settings helps extending the battery life.",
            Item: [
              { label: "Acoustic and visual alarms inactive", value: "0" },
              {
                label: "Acoustic alarm inactive, visual alarm active",
                value: "1",
              },
              {
                label: "Acoustic alarm active, visual alarm inactive",
                value: "2",
              },
              { label: "Acoustic and visual alarms active", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Type of alarm frame for association group 1",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "Type of alarm frame for association group 1, activated by smoke sensor. The parameter allows to specify the type of alarm frame or to force transmission of control commands (BASIC_SET)",
            Item: [
              { label: "ALARM SMOKE", value: "0" },
              { label: "BASIC_SET", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Forced Level of Dimming group 1",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "The value of 255 allows for turning on a device. In case of Dimmer, the value of 255 means turning on the device with the last memorized state. E.g. Dimmer set to 30% and then turned off, and next turned on using the 255 command, will turn on with the last remembered status, i.e. 30%. In case of alarm frames, alarm priority is defined. Available settings: (1 - 99) or 255. Default setting: 255",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Temperature report interval",
            max: "17280",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Time interval between consecutive temperature reports. The parameter is relevant for the battery powering mode only. Longer time interval means less frequent communication and thus a longer battery life. Report is sent when new temperatue value is different from the one previously reported. Temperature reports can be also sent as a result of polling. Available settings: 1 to 17280, 0 (multiply by 5 seconds) [5s-24h]. 0 reports inactive. Default setting: 0 (Reports inactive)",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Temperature report hysteresis",
            max: "100",
            min: "0",
            type: "byte",
            value: "20",
            Help:
              "The temperature report will only be sent if there is a difference in temperature value from the previous value reported, defined in this parameter (hysteresis). Temparature reports can be also sent as a result of polling. Available settings: 0 to 100 (in 0,1C steps). 0 temperature change reporting inactive. Default setting: 20 (2C)",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Alarm broadcast",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'Transmitting the alarm or control frame in "broadcast" mode (i.e. to all devices within range), information sent in this mode is not repeated by the mesh network. NOTE: If the broadcast mode of information transmission is activated for a given channel, then transmission of information in singlecast mode to devices assigned to the association group of this channel is deactivated. ',
            Item: [
              { label: "Broadcasts INACTIVE", value: "0" },
              { label: "Smoke ACTIVE, tamper INACTIVE", value: "1" },
              { label: "Smoke INACTIVE, tamper ACTIVE", value: "2" },
              { label: "Smoke ACTIVE, tamper ACTIVE", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Temperature measurement compensation",
            max: "1000",
            min: "-1000",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Parameter stores a temperature value to be added to or deducted from the current temperature measured by internal temperature sensor in order to compensate the difference between air temperature and temperature measured at the ceiling level. Available settings: -1000 -/+ 1000 (in 0,1C steps). Default setting: 0 (0C)",
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "Z-Wave range test interval",
            max: "144",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "Time period between the consecutive Z-Wave network range tests. In battery powering mode, Z-Wave network range test is carried out at the wake up interval. The value of 0 turns off the Z-Wave range test, regardless of the powering mode chosen. Available settings: 0 to 144 (10min multiplier) [10min-24h]. 0 Z-Wave network range test inactive. Default setting: 1 (10min)",
          },
          {
            genre: "config",
            index: "81",
            instance: "1",
            label: "Temperature alarm threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "54",
            Help:
              "Temperature value, measured by the built-in temperature sensor, above which the temperature alarm is sent. Available settings: 0,2 - 100. 0 temperature alarm inactive. 2 - 100 (2 - 100C). Default setting: 54 (54C)",
          },
          {
            genre: "config",
            index: "82",
            instance: "1",
            label: "Smoke Sensor sensitivity",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "There are 3 levels of sensitivity to smoke presence. Level 1 means the highest sensitivity.",
            Item: [
              { label: "High", value: "1" },
              { label: "Medium", value: "2" },
              { label: "Low", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "83",
            instance: "1",
            label: "Black Box sensitivity level",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter allows for specifying the moment in which the Black Box starts recording data. After the specified smoke and temperature values will be exceeded, the Fibaro Smoke Sensor Black Box will record them.",
            Item: [
              { label: "High", value: "1" },
              { label: "Medium", value: "2" },
              { label: "Low", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "84",
            instance: "1",
            label: "Malfunction alarm",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "Time interval in which malfunction alarm, if detected, is repeated using visual and acoustic alarms. Available settings: 1 - 255 (100 ms multiplier) [100ms-25,5s]. Default setting: 10 (1s)",
          },
          {
            genre: "config",
            index: "85",
            instance: "1",
            label: "Temperature alarm",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "Time interval in which temperature alarm, if detected, is repeated using visual and acoustic alarms. Available settings: 1 - 255 (100 ms multiplier) [100ms-25,5s]. Default setting: 5 (500ms)",
          },
          {
            genre: "config",
            index: "86",
            instance: "1",
            label: "Lack of the Z-Wave range alarm",
            max: "17280",
            min: "1",
            size: "2",
            type: "short",
            value: "360",
            Help:
              "Time interval in which lack of the Z-Wave network alarm, if detected, is repeated using visual and acoustic alarms. Available settings: 1 - 17280 (5s multiplier) [5s-24h]. Default setting: 360 (30min)",
          },
          {
            genre: "config",
            index: "87",
            instance: "1",
            label: "Low battery alarm",
            max: "17280",
            min: "1",
            size: "2",
            type: "short",
            value: "360",
            Help:
              "Time interval in which low battery alarm, if detected, is repeated using visual and acoustic alarms. Available settings: 1 - 17280 (5s multiplier) [5s-24h]. Default setting: 360 (30min)",
          },
          {
            genre: "config",
            index: "88",
            instance: "1",
            label: "Consider temperature measurement compensation",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows for specifying the moment in which the Black Box starts recording data. After the specified smoke and temperature values will be exceeded, the Fibaro Smoke Sensor Black Box will record them.",
            Item: [
              { label: "Ignore temperature compensation", value: "0" },
              { label: "Include temperature compensation", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "89",
            instance: "1",
            label: "Tamper alarm",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "default setting: tamper alarm active, with cancellation option available",
            Item: [
              { label: "tamper alarm inactive", value: "0" },
              {
                label:
                  "tamper alarm active, with cancellation option available",
                value: "1",
              },
              {
                label: "tamper alarm active, without cancellation option",
                value: "2",
              },
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
              {
                auto: "false",
                index: "1",
                label: "Smoke Alarm",
                max_associations: "5",
              },
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

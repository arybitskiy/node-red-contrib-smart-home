import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1002:0B01",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgfs101zw5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2791/",
            id: "1002",
            name: "ZWProductPage",
            type: "0B01",
          },
          {
            text:
              "1) Open the cover by turning it counter-clockwise. \n2) Make sure the device is powered (either by a battery or a DC power supply).\n3) Press and hold the TMP button for 15-20 seconds until LED glows yellow (4th menu position).\n4) Release and click the TMP button to start the reset procedure.\n5) Successful reset will be confirmed with the LED indicator changing colour to red and an acoustic signal.\nUse reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "FGFS-101", id: "1002", name: "Identifier", type: "0B01" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3327/FGFS-101-EN-T-v2.11.pdf",
            name: "ProductManual",
          },
          {
            text:
              "FIBARO Flood Sensor will wake up at a defined time interval and will always try to communicate with the main controller. There is a possibility to wake up the device manually by clicking the TMP button",
            name: "WakeupDescription",
          },
          {
            text:
              "1) Open the cover by turning it counter-clockwise.\n2) Make sure the device is powered (either by a battery or a DC power supply).\n3) Place the device within the direct range of your Z-Wave controller.\n4) Set the main controller in remove mode (see the controller’s manual).\n5) Quickly, triple click the TMP button located inside the casing.\n6) Wait for the removing process to end.  \n7) Successful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1) Open the cover by turning it counter-clockwise.\n2) Remove battery blocker.\n3) Place the device within the direct range of your Z-Wave controller.\n4) Set the main controller in (security/non-security) add mode (see the controller’s manual).\n5) Quickly, triple click the TMP button located inside the casing.\n6) Wait for the adding process to end. \n7) Successful adding will be confirmed by the Z-Wave controller’s message.\n8) Close the cover by turning it clockwise.\n9) Place the sensor onto a surface prone to flooding. Three electrodes underneath the device should evenly touch the surface.",
            name: "InclusionDescription",
          },
          {
            text:
              "FIBARO Flood Sensor is a universal, Z-Wave Plus compatible, flood and temperature sensor. The device can be powered using battery, 12/24V DC power supply or both. Flood alarm is sent to the Z-Wave network devices or additionally to any alarm system controller through opening a NC contact using the external power supply. The device has a built-in temperature sensor that allows to monitor ambient temperature. FIBARO Flood Sensor is designed to be placed on the floor or mounted on a wall (in this case Flood Sensor probes should be extended using addition wire). The device has a built-in visual LED indicator and an acoustic alarm. The LED indicator signals flood, operating mode or the Z-Wave network communication range. In addition, the device is equipped with a sensor reporting tilt or movement to the main controller e.g. when someone has taken the Sensor from its original location.  FIBARO Flood Sensor is sink-proof, which means it drifts on the water surface and keeps on sending alarm signal in case of substantial inundation of water (if not wired). Flood Sensor is compatible with any Z-Wave or Z-Wave+ Controller.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "1002",
            name: "FrequencyName",
            type: "0B01",
          },
          { text: "FIBARO Flood Sensor", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/2742/",
            id: "2002",
            name: "ZWProductPage",
            type: "0B01",
          },
          { text: "FGFS-101", id: "2002", name: "Identifier", type: "0B01" },
          {
            text: "U.S. / Canada / Mexico",
            id: "2002",
            name: "FrequencyName",
            type: "0B01",
          },
          {
            text: "https://products.z-wavealliance.org/products/3327/",
            id: "1003",
            name: "ZWProductPage",
            type: "0B01",
          },
          { text: "FGFS-101", id: "1003", name: "Identifier", type: "0B01" },
          {
            text: "CEPT (Europe)",
            id: "1003",
            name: "FrequencyName",
            type: "0B01",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1354/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1642/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2742/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2791/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3327/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 8,
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
            label: "Alarm Cancellation Delay",
            max: "3600",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Determines time period (in seconds) by which a Flood Sensor will retain the flood state after the flooding itself has ceased. The sensor will keep on reporting flooding to the main controller. This parameter setting does not affect acoustic and visual alarms, which turn off immediately after flooding ceases.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Acoustic and visual signals",
            size: "1",
            type: "list",
            value: "3",
            Help: "Acoustic and visual signals in case of flooding.",
            Item: [
              { label: "acoustic and visual alarms inactive", value: "0" },
              {
                label: "acoustic alarm inactive, visual alarm active",
                value: "1",
              },
              {
                label: "acoustic alarm active, visual alarm inactive",
                value: "2",
              },
              { label: "acoustic and visual alarms active", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label:
              "Requested dimming level / roller blind opening level when sending turn on / open command to 2nd association group devices",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              'Determines the requested "on" level to be sent to devices from 2nd association group upon flood event.',
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label:
              "Deactivate turning off devices in 2nd association group alarm cancellation in 3rd group",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This setting decides whether device turn off commands and alarm cancellation notifications will be sent to devices in 2nd and 3rd association groups (respectively)",
            Item: [
              { label: "Alarm (flooding) cancellation INACTIVE", value: "0" },
              { label: "Alarm (flooding) cancellation ACTIVE", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label:
              "Interval between successive readings of temperature sensors",
            max: "65535",
            min: "1",
            type: "short",
            value: "300",
            Help:
              "Interval between successive readings of temperature from all sensors connected to the device in seconds. Note: taking temperature readings from the sensor does not result in sending a temperature condition report to the central hub.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Insensitiveness to temperature changes.",
            max: "1000",
            min: "1",
            type: "short",
            value: "50",
            Help:
              "Insensitiveness to temperature changes. This is the maximum acceptable difference between the last reported temperature and the current temperature taken from the sensor. If the temperatures differ by the set value or more, then a report with the current temperature value is sent to the device assigned to association group no. 3. Intervals between taking readings from sensors are specified by parameter no. 10.\n                Possible parameter settings:1 to 1000 [each 0.01oC] [0.01oC to 10.00oC].",
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Low temperature alarm threshold.",
            max: "10000",
            min: "-10000",
            type: "short",
            value: "1500",
            Help:
              "The parameter stores a temperature value, below which LED indicator blinks with a colour determined by Parameter 61 settings. By default the LED indicator blinks blue.\n                Possible parameter settings:-10000 to 10000 [each 0.01oC] [-100oC to 100oC].",
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "High temperature alarm threshold.",
            max: "10000",
            min: "-10000",
            type: "short",
            value: "3500",
            Help:
              "The parameter stores a temperature value, above which LED indicator blinks with a colour determined by Parameter 62 settings. By default the LED indicator blinks red.\n                Possible parameter settings:-10000 to 10000 [each 0.01oC] [-100oC to 100oC].",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Low temperature alarm indicator colour.",
            max: "16777215",
            min: "0",
            type: "int",
            value: "255",
            Help: "The parameter stores RGB colour value.",
          },
          {
            genre: "config",
            index: "62",
            instance: "1",
            label: "High temperature alarm indicator colour.",
            max: "16777215",
            min: "0",
            type: "int",
            value: "16711680",
            Help: "The parameter stores RGB colour value.",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Managing a LED indicator under standard operation.",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "Parameter determines LED indicator's operation. Set to 0 turns the indicator off, saving battery life.",
            Item: [
              { label: "LED doesn't indicate temperature", value: "0" },
              {
                label:
                  "LED indicates temperature (blink) every Temperature Measurement Interval (Parameter 10, constant power + battery) or Wake Up Interval (battery)",
                value: "1",
              },
              {
                label:
                  "LED indicates temperature constantly, only in constant power mode.",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Temperature measurement compensation.",
            max: "10000",
            min: "-10000",
            type: "short",
            value: "0",
            Help:
              "Parameter stores a temperature value to be added to or deducted from the current temperature measured by the internal temperature sensor in order to compensate the difference between air temperature and the temperature at floor level.\n                Possible parameter settings:-10000 to 10000 [each 0.01oC] [-100oC to 100oC].",
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label:
              "Alarm frame sent to 1st and 4th Association Group activation.",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "The device is able to report tamper alarms resulting from sensor tilt/movement or TMP button state change.",
            Item: [
              { label: "Tamper alarms INACTIVE", value: "0" },
              { label: "Button tamper alarm ACTIVE", value: "1" },
              { label: "Movement tamper alarm ACTIVE", value: "2" },
              { label: "Button and movement tamper alarms ACTIVE", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "75",
            instance: "1",
            label: "Visual and audible alarm duration",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Parameter determines a time period after which alarm will become quiet - still active but the device will go into battery saving mode. Visual or acoustic alarm will be reactivated after time period specified in Parameter 76. When alarm status ceases, alarm will be turned off immediately.\n                Value of 0 means visual and acoustic alarms are active indefinitely. In battery power mode the device will never go to sleep which may shorten battery life significantly.",
          },
          {
            genre: "config",
            index: "76",
            instance: "1",
            label: "Alarm signalization reactivation period",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "Parameter determines a time period after which an alarm frame will be retransmitted.\n                Value of 0 cancels an alarm frame retransmission.",
          },
          {
            genre: "config",
            index: "77",
            instance: "1",
            label: "Flood sensor functionality turned off.",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Allows for turning off the internal flood sensor. Tamper and internal temperature sensors will remain active.",
            Item: [
              { label: "Default flood sensor operation (ACTIVE)", value: "0" },
              { label: "Flood sensor INACTIVE", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "78",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "7",
            min: "0",
            type: "byte",
            value: "7",
            Help:
              "This parameter defines how commands are sent in specified association groups: as secure or non-secure. Parameter is active only in Z-Wave network security mode. It does not apply to 1st Lifeline group.",
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Flood Control", max_associations: "5" },
              { index: "3", label: "Flood Alarm", max_associations: "5" },
              { index: "4", label: "Tamper Alarm", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

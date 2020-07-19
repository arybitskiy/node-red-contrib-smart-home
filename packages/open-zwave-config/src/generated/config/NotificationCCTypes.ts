import type { document } from "../github.com/OpenZWave/NotificationCCTypes";

const config: Partial<document> = {
  NotificationTypes: {
    Revision: 11,
    AlarmType: [
      {
        id: "1",
        name: "Smoke Alarm",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Smoke Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Smoke Detected at Unknown Location" },
          { id: "3", name: "Smoke Test" },
          { id: "4", name: "Replacement Required (Unspecified)" },
          { id: "5", name: "Replacement Required (End Of Life)" },
          { id: "6", name: "Silenced" },
          { id: "7", name: "Maintenance Required: Periodic Inspection" },
          { id: "8", name: "Maintenance Required: Dust In Device" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "2",
        name: "Carbon Monoxide",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Carbon Monoxide Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Carbon Monoxide Detected at Unknown Location" },
          {
            id: "3",
            name: "Test",
            AlarmEventParam: {
              id: "258",
              type: "list",
              name: "Result",
              Item: [
                { id: "1", label: "Passed" },
                { id: "2", label: "Failed" },
              ],
            },
          },
          { id: "4", name: "Replacement Required (Unspecified)" },
          { id: "5", name: "Replacement Required (End Of Life)" },
          { id: "6", name: "Silenced" },
          { id: "7", name: "Maintenance Required: Periodic Inspection" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "3",
        name: "Carbon Dioxide",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Carbon Dioxide Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Carbon Dioxide Detected at Unknown Location" },
          {
            id: "3",
            name: "Test",
            AlarmEventParam: {
              id: "258",
              type: "list",
              name: "Result",
              Item: [
                { id: "1", label: "Passed" },
                { id: "2", label: "Failed" },
              ],
            },
          },
          { id: "4", name: "Replacement Required (Unspecified)" },
          { id: "5", name: "Replacement Required (End Of Life)" },
          { id: "6", name: "Silenced" },
          { id: "7", name: "Maintenance Required: Periodic Inspection" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "4",
        name: "Heat",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "OverHeat at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "OverHeat at Unknown at Location" },
          {
            id: "3",
            name: "Rapid Temperature Rise at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "4", name: "Rapid Temperature Rise at Unknown Location" },
          {
            id: "5",
            name: "UnderHeat at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "6", name: "UnderHeat at Unknown Location" },
          { id: "7", name: "Test" },
          { id: "8", name: "Replacement Required (End_Of_Life)" },
          { id: "9", name: "Silenced" },
          { id: "10", name: "Maintenance Required: Dust In Device" },
          { id: "11", name: "Maintenance_Required: Periodic Inspection" },
          {
            id: "12",
            name: "Rapid temperature fall at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "13", name: "Rapid temperature fall at Unknown Location" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "5",
        name: "Water",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Water Leak at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Water Leak at Unknown Location" },
          {
            id: "3",
            name: "Water Level Dropped at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "4", name: "Water Level Dropped at Unknown Location" },
          { id: "5", name: "Replace Filter" },
          {
            id: "6",
            name: "Water Flow",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Threshold",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
                { id: "4", label: "Max" },
              ],
            },
          },
          {
            id: "7",
            name: "Water Pressure",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
                { id: "4", label: "Max" },
              ],
            },
          },
          {
            id: "8",
            name: "Water Temperature",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
              ],
            },
          },
          {
            id: "9",
            name: "Water Level",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
              ],
            },
          },
          { id: "10", name: "Sump Pump Active" },
          { id: "11", name: "Sump Pump Failure" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "6",
        name: "Access Control",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Manual Lock Operation" },
          { id: "2", name: "Manual Unlock Operation" },
          { id: "3", name: "Wireless Lock Operation" },
          { id: "4", name: "Wireless Unlock Operation" },
          {
            id: "5",
            name: "Keypad Lock Operation",
            AlarmEventParam: {
              id: "260",
              type: "usercodereport",
              name: "User Code",
            },
          },
          {
            id: "6",
            name: "Keypad Unlock Operation",
            AlarmEventParam: {
              id: "260",
              type: "usercodereport",
              name: "User Code",
            },
          },
          { id: "7", name: "Manual Lock Not Fully Locked" },
          { id: "8", name: "Wireless Not Fully Locked" },
          { id: "9", name: "Auto Lock" },
          { id: "10", name: "Auto Lock Not Fully Locked" },
          { id: "11", name: "Lock Jammed" },
          { id: "12", name: "All User Codes Deleted" },
          { id: "13", name: "Single User Code Deleted" },
          { id: "14", name: "New User Code Added" },
          { id: "15", name: "Duplicate User Code Not Added" },
          { id: "16", name: "Keypad Disabled" },
          { id: "17", name: "Keypad Busy" },
          { id: "18", name: "New Program Code Entered" },
          { id: "19", name: "User Codes Attempt Exceeds Limit" },
          { id: "20", name: "Wireless Unlock Invalid UserCode Entered" },
          { id: "21", name: "Wireless Lock Invalid UserCode Entered" },
          { id: "22", name: "Door/Window Open" },
          { id: "23", name: "Door/Window Closed" },
          { id: "24", name: "Window/door handle is open" },
          { id: "25", name: "Window/door handle is closed" },
          {
            id: "26",
            name: "Messaging User Code entered via keypad",
            AlarmEventParam: {
              id: "260",
              type: "usercodereport",
              name: "UserCode",
            },
          },
          {
            id: "64",
            name: "Barrier Initializing",
            AlarmEventParam: {
              id: "262",
              type: "list",
              name: "Progress",
              Item: [
                { id: "0", label: "Process Complete" },
                { id: "255", label: "Performing Process" },
              ],
            },
          },
          { id: "65", name: "Barrier Force Exceeded" },
          {
            id: "66",
            name: "Barrier Motor Time Exceeded",
            AlarmEventParam: { id: "1", type: "byte", name: "Time Limit" },
          },
          { id: "67", name: "Barrier Physical Limits Exceeded" },
          { id: "68", name: "Barrier Failed Operation" },
          { id: "69", name: "Barrier Unattended Operation Disabled" },
          { id: "70", name: "Barrier Malfunction" },
          {
            id: "71",
            name: "Barrier Vacation Mode",
            AlarmEventParam: {
              id: "263",
              type: "list",
              name: "Mode",
              Item: [
                { id: "0", label: "Disabled" },
                { id: "255", label: "Enabled" },
              ],
            },
          },
          {
            id: "72",
            name: "Barrier Safety Beam Obstruction",
            AlarmEventParam: {
              id: "264",
              type: "list",
              name: "Obstruction",
              Item: [
                { id: "0", label: "No Obstruction" },
                { id: "255", label: "Obstruction" },
              ],
            },
          },
          {
            id: "73",
            name: "Barrier Sensor Not Detected",
            AlarmEventParam: { id: "265", type: "byte", name: "Sensor ID" },
          },
          {
            id: "74",
            name: "Barrier Battery Low",
            AlarmEventParam: { id: "265", type: "byte", name: "Sensor ID" },
          },
          { id: "75", name: "Barrier Short in Wall Station Wires" },
          { id: "76", name: "Barrier Associated with Non ZWave Device" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "7",
        name: "Home Security",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Intrusion at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Intrusion at Unknown Location" },
          { id: "3", name: "Tampering -  Cover Removed" },
          { id: "4", name: "Tampering - Invalid Code" },
          {
            id: "5",
            name: "Glass Breakage at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "6", name: "Glass Breakage at UnknownLocation" },
          {
            id: "7",
            name: "Motion Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "8", name: "Motion Detected at Unknown Location" },
          { id: "9", name: "Tampering - Product Moved" },
          { id: "10", name: "Impact detected" },
          { id: "11", name: "Magnetic field interference detected" },
          {
            id: "12",
            name: "RF Jamming detected",
            AlarmEventParam: { id: "272", type: "byte", name: "RSSI Level" },
          },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "8",
        name: "Power Management",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Power Applied" },
          { id: "2", name: "AC Power Lost" },
          { id: "3", name: "AC Power Restored" },
          { id: "4", name: "Surge Detected" },
          { id: "5", name: "Brownout Detected" },
          { id: "6", name: "Over Current Detected" },
          { id: "7", name: "Over Voltage Detected" },
          { id: "8", name: "Over Load Detected" },
          { id: "9", name: "Load Error" },
          { id: "10", name: "Replace Battery Soon" },
          { id: "11", name: "Replace Battery Now" },
          { id: "12", name: "Battery Charging" },
          { id: "13", name: "Battery Charged" },
          { id: "14", name: "Battery Low" },
          { id: "15", name: "Battery Critical" },
          { id: "16", name: "Back-up battery is low" },
          { id: "18", name: "Back-up battery disconnected" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "9",
        name: "System",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Hardware Failure" },
          { id: "2", name: "Software Failure" },
          {
            id: "3",
            name: "Hardware Failure Code",
            AlarmEventParam: { id: "266", type: "string", name: "Error Code" },
          },
          {
            id: "4",
            name: "Software Failure Code",
            AlarmEventParam: { id: "266", type: "string", name: "Error Code" },
          },
          { id: "5", name: "Heartbeat" },
          { id: "6", name: "Tampering Detected" },
          { id: "7", name: "Emergency Shutoff" },
          { id: "8", name: "Digital input high state" },
          { id: "9", name: "Digital input low state" },
          { id: "10", name: "Digital input open" },
          { id: "254", name: "Unknown_Event" },
        ],
      },
      {
        id: "10",
        name: "Emergency",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Contact Police Department" },
          { id: "2", name: "Contact Fire Department" },
          { id: "3", name: "Contact Medical Service" },
          { id: "4", name: "Panic alert" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "11",
        name: "Clock",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Wake Up Alert" },
          { id: "2", name: "Timer Ending" },
          {
            id: "3",
            name: "Time Remaining",
            AlarmEventParam: { id: "267", type: "duration", name: "Duration" },
          },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "12",
        name: "Appliance",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Program Started" },
          { id: "2", name: "Program In Progress" },
          { id: "3", name: "Program Completed" },
          { id: "4", name: "Replace Main Filter" },
          { id: "5", name: "Failure To Set Temperature" },
          { id: "6", name: "Supplying Water" },
          { id: "7", name: "Water Supply Failure" },
          { id: "8", name: "Boiling" },
          { id: "9", name: "Boiling Failure" },
          { id: "10", name: "Washing" },
          { id: "11", name: "Washing Failure" },
          { id: "12", name: "Rinsing" },
          { id: "13", name: "Rinsing Failure" },
          { id: "14", name: "Draining" },
          { id: "15", name: "Draining Failure" },
          { id: "16", name: "Spinning" },
          { id: "17", name: "Spinning Failure" },
          { id: "18", name: "Drying" },
          { id: "19", name: "Drying Failure" },
          { id: "20", name: "Fan Failure" },
          { id: "21", name: "Compressor Failure" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "13",
        name: "Home Health",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Leaving Bed" },
          { id: "2", name: "Sitting On Bed" },
          { id: "3", name: "Lying On Bed" },
          { id: "4", name: "Posture Changed" },
          { id: "5", name: "Sitting On Edge Of Bed" },
          {
            id: "6",
            name: "Volatile Organic Compound Level",
            AlarmEventParam: {
              id: "268",
              type: "list",
              name: "Pollution Level",
              Item: [
                { id: "1", label: "Clean" },
                { id: "2", label: "Slightly Polluted" },
                { id: "3", label: "Moderately Polluted" },
                { id: "4", label: "Highly Polluted" },
              ],
            },
          },
          {
            id: "7",
            name: "Sleep apnea detected",
            AlarmEventParam: {
              id: "268",
              type: "list",
              name: "breath level",
              Item: [
                { id: "1", label: "Low Breath" },
                { id: "2", label: "No Breath" },
              ],
            },
          },
          { id: "8", name: "Sleep stage 0 detected (Dreaming/REM)" },
          { id: "9", name: "Sleep stage 1 detected (Light sleep, non-REM 1)" },
          {
            id: "10",
            name: "Sleep stage 2 detected (Medium sleep, non-REM 2)",
          },
          { id: "11", name: "Sleep stage 3 detected (Deep sleep, non-REM 3)" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "14",
        name: "Siren",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Active" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "15",
        name: "Water Valve",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Valve Operation",
            AlarmEventParam: {
              id: "269",
              type: "list",
              name: "Status",
              Item: [
                { id: "0", label: "Off" },
                { id: "1", label: "On" },
              ],
            },
          },
          {
            id: "2",
            name: "Master Valve Operation",
            AlarmEventParam: {
              id: "269",
              type: "list",
              name: "Status",
              Item: [
                { id: "0", label: "Off" },
                { id: "1", label: "On" },
              ],
            },
          },
          { id: "3", name: "Valve Short Circuit" },
          { id: "4", name: "Master Valve Short Circuit" },
          {
            id: "5",
            name: "Valve Current Alarm",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
                { id: "4", label: "Max" },
              ],
            },
          },
          {
            id: "6",
            name: "Master Valve Current Alarm",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "No Data" },
                { id: "2", label: "Below Low Threshold" },
                { id: "3", label: "Above High Threshold" },
                { id: "4", label: "Max" },
              ],
            },
          },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "16",
        name: "Weather",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Rain Detected" },
          { id: "2", name: "Moisture Detected" },
          { id: "3", name: "Freeze" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "17",
        name: "Irrigation",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Schedule Started",
            AlarmEventParam: { id: "270", type: "byte", name: "Schedule ID" },
          },
          {
            id: "2",
            name: "Schedule Finished",
            AlarmEventParam: { id: "270", type: "byte", name: "Schedule ID" },
          },
          {
            id: "3",
            name: "Valve Table Run Started",
            AlarmEventParam: {
              id: "271",
              type: "byte",
              name: "Valve Table ID",
            },
          },
          {
            id: "4",
            name: "Valve Table Run Finished",
            AlarmEventParam: {
              id: "271",
              type: "byte",
              name: "Valve Table ID",
            },
          },
          { id: "5", name: "Device Not Configured" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "18",
        name: "Gas",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Combustable Gas Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Combustable Gas Detected at Unknown Location" },
          {
            id: "3",
            name: "Toxic Gas Detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "4", name: "Toxic Gas Detected Unknown Location" },
          { id: "5", name: "Alarm Test" },
          { id: "6", name: "Replacement Required" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "19",
        name: "Pest Control",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Trap armed at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Trap armed" },
          {
            id: "3",
            name: "Trap re-arm required at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "4", name: "Trap re-arm required" },
          {
            id: "5",
            name: "Pest detected at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "6", name: "Pest detected" },
          {
            id: "7",
            name: "Pest exterminated at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "8", name: "Pest exterminated" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "20",
        name: "Light",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          { id: "1", name: "Light detected" },
          { id: "2", name: "Light color transition detected" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "21",
        name: "Water Quality Monitoring",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Chlorine",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Threshold",
              Item: [
                { id: "1", label: "Below Low Threshold" },
                { id: "2", label: "Above High Threshold" },
              ],
            },
          },
          {
            id: "2",
            name: "Acidity (pH)",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Threshold",
              Item: [
                { id: "1", label: "Below Low Threshold" },
                { id: "2", label: "Above High Threshold" },
                { id: "3", label: "Decreasing pH" },
                { id: "4", label: "Increasing pH" },
              ],
            },
          },
          {
            id: "3",
            name: "Water Oxidation",
            AlarmEventParam: {
              id: "259",
              type: "list",
              name: "Type",
              Item: [
                { id: "1", label: "Below Low Threshold" },
                { id: "2", label: "Above High Threshold" },
              ],
            },
          },
          { id: "4", name: "Chlorine empty" },
          { id: "5", name: "Acidity (pH) empty" },
          { id: "6", name: "Waterflow measuring station shortage detected" },
          { id: "7", name: "Waterflow clear water shortage detected" },
          {
            id: "8",
            name: "Disinfection system error detected",
            AlarmEventParam: { id: "1", type: "byte", name: "Error" },
          },
          {
            id: "9",
            name: "Filter cleaning ongoing",
            AlarmEventParam: { id: "1", type: "byte", name: "Progress" },
          },
          { id: "10", name: "Heating operation ongoing" },
          { id: "11", name: "Filter pump operation ongoing" },
          { id: "12", name: "Freshwater operation ongoing" },
          { id: "13", name: "Dry protection operation active" },
          { id: "14", name: "Water tank is empty" },
          { id: "15", name: "Water tank level is unknown" },
          { id: "16", name: "Water tank is full" },
          { id: "17", name: "Collective disorder" },
          { id: "254", name: "Unknown Event" },
        ],
      },
      {
        id: "22",
        name: "Home Monitoring",
        AlarmEvent: [
          {
            id: "0",
            name: "Clear",
            AlarmEventParam: {
              id: "256",
              type: "byte",
              name: "Previous Event Cleared",
            },
          },
          {
            id: "1",
            name: "Home occupied at Location",
            AlarmEventParam: {
              id: "257",
              type: "location",
              name: "Alert Location",
            },
          },
          { id: "2", name: "Home occupied" },
          { id: "254", name: "Unknown Event" },
        ],
      },
    ],
  },
};

export default config;

import zoomApi from 'zoomapi';
import type { resource } from '../resource';

/**
 * 1 - Instant meeting.
 * 2 - Scheduled meeting.
 * 3 - Recurring meeting with no fixed time.
 * 8 - Recurring meeting with fixed time.
 */
export type MeetingType = 1 | 2 | 3 | 8;
export type MeetingSettings = {
    host_video?: boolean;
    participant_video?: boolean;
    cn_meeting?: boolean;
    in_meeting?: boolean;
    join_before_host?: boolean;
    mute_upon_entry?: boolean;
    watermark?: boolean;
    use_pmi?: boolean;
    approval_type?: ApprovalType;
    registration_type?: RegistrationType;
    audio?: Audio;
    auto_recording?: AudioRecording;
    alternative_hosts?: string;
    close_registration?: boolean;
    waiting_room?: boolean;
    global_dial_in_countries?: string[];
    global_dial_in_numbers?: {
        country: string;
        country_name: string;
        city: string;
        number: string;
        type: string;
    }[];
    contact_name?: string;
    contact_email?: string;
    registrants_confirmation_email?: boolean;
    registrants_email_notification?: boolean;
    meeting_authentication?: boolean;
    authentication_option?: string;
    authentication_domains?: string;
    authentication_name?: string;
    additional_data_center_regions?: string[];
};
export type ApprovalType = 0 | 1 | 2;
export type RegistrationType = 1 | 2 | 3;
export type Audio = 'both' | 'telephony' | 'voip';
export type AudioRecording = 'local' | 'cloud' | 'none';
export type Recurrence = {
    /**
     * 1 - Daily.
     * 2 - Weekly.
     * 3 - Monthly.
     */
    type: 1 | 2 | 3;
    repeat_interval: number;
    weekly_days: string;
    monthly_day: number;
    monthly_week: number;
    monthly_week_day: number;
    end_times: number;
    end_date_time: string;
};
export type Meeting = {
    uuid?: string;
    id?: string;
    host_id?: string;
    topic?: string;
    type?: MeetingType;
    start_time?: string;
    duration?: number;
    schedule_for?: string;
    timezone?: string;
    created_at?: string;
    join_url?: string;
    agenda?: string;
    start_url?: string;
    password?: string;
    h323_password?: string;
    encrypted_password?: string;
    pmi?: number;
    tracking_fields?: TrackingField[];
    occurrences?: Occurrence[];
    settings?: MeetingSettings;
    recurrence?: Recurrence;
};
export type Occurrence = {
    occurrence_id: string;
    start_time: string;
    duration: number;
    status: string;
};

export type TrackingField = {
    field: string;
    value: string;
};

export async function main(resource: resource, meetingId: string, meeting: Meeting) {
    const client = zoomApi(resource);
    const createdMeeting = await client.meetings.UpdateMeeting(meetingId, meeting);
    return createdMeeting;
}


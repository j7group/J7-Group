/* eslint-disable @typescript-eslint/no-explicit-any */

export class MailerLiteClient {
  private apiKey: string;
  private baseURL = 'https://connect.mailerlite.com/api';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createOrUpdateSubscriber(data: {
    email: string;
    name: string;
    phone: string;
    fields?: Record<string, any>;
    groups?: string[];
  }) {
    const response = await fetch(`${this.baseURL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        email: data.email,
        fields: {
          name: data.name,
          phone: data.phone,
          ...data.fields,
        },
        groups: data.groups || [],
        status: 'active',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add subscriber');
    }

    return response.json();
  }

  async addToGroup(subscriberId: string, groupId: string) {
    const response = await fetch(
      `${this.baseURL}/subscribers/${subscriberId}/groups/${groupId}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to add subscriber to group');
    }

    return response.json();
  }
}
import React from "react";
import { Rocket, X, Check } from "lucide-react";
import {
  Container,
  DividerSection,
  Header,
  HeaderButton,
  HeaderTitle,
  Notification,
  NotificationAction,
  NotificationActionsContainer,
  NotificationContent,
  NotificationIconContainer,
  NotificationList,
  NotificationMessage,
  NotificationTime,
} from "./styles";

const NOTIFICATIONS = {
  newNotifications: [
    {
      id: 1,
      message:
        "Você recebeu um convite para fazer parte da empresa Rocketseat.",
      time: "há 3 minutos",
      action: false,
    },
    {
      id: 2,
      message:
        "Você recebeu um convite para fazer parte da empresa Rocketseat.",
      time: "há 3 minutos",
      action: true,
    },
  ],
  oldNotifications: [
    {
      id: 3,
      message:
        "Você recebeu um convite para fazer parte da empresa Rocketseat.",
      time: "há 3 minutos",
      action: false,
    },
    {
      id: 4,
      message:
        "Você recebeu um convite para fazer parte da empresa Rocketseat.",
      time: "há 3 minutos",
      action: false,
    },
    {
      id: 5,
      message:
        "Você recebeu um convite para fazer parte da empresa Rocketseat.",
      time: "há 3 minutos",
      action: false,
    },
  ],
};

export function Widget() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Notificação</HeaderTitle>

        <HeaderButton>MARCAR TODAS COMO VISTA</HeaderButton>
      </Header>

      <div>
        <DividerSection>Recentes</DividerSection>

        <NotificationList>
          {NOTIFICATIONS.newNotifications.map((newNotification) => (
            <Notification key={newNotification.id}>
              <NotificationIconContainer>
                <Rocket size={24} color="#7c3aed" />
              </NotificationIconContainer>

              <NotificationContent>
                <NotificationMessage $isNew={true}>
                  {newNotification.message}
                </NotificationMessage>

                <NotificationTime>{newNotification.time}</NotificationTime>
              </NotificationContent>

              {newNotification?.action && (
                <NotificationActionsContainer>
                  <NotificationAction $isPrimary={false}>
                    <X size={12} color="#fafafa" />
                  </NotificationAction>
                  <NotificationAction $isPrimary={true}>
                    <Check size={12} color="#fafafa" />
                  </NotificationAction>
                </NotificationActionsContainer>
              )}
            </Notification>
          ))}
        </NotificationList>
      </div>

      <div>
        <DividerSection>Antigas</DividerSection>

        <NotificationList>
          {NOTIFICATIONS.oldNotifications.map((oldNotification) => (
            <Notification key={oldNotification.id}>
              <NotificationIconContainer>
                <Rocket size={24} color="#7c3aed" />
              </NotificationIconContainer>

              <NotificationContent>
                <NotificationMessage $isNew={false}>
                  {oldNotification.message}
                </NotificationMessage>

                <NotificationTime>{oldNotification.time}</NotificationTime>
              </NotificationContent>

              {oldNotification?.action && (
                <NotificationActionsContainer>
                  <NotificationAction $isPrimary={false}>
                    <X size={12} color="#fafafa" />
                  </NotificationAction>
                  <NotificationAction $isPrimary={true}>
                    <Check size={12} color="#fafafa" />
                  </NotificationAction>
                </NotificationActionsContainer>
              )}
            </Notification>
          ))}
        </NotificationList>
      </div>
    </Container>
  );
}

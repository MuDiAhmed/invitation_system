<?php

namespace App\Tests\Api;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class InvitationControllerTest extends WebTestCase
{
    protected function createAuthenticatedClient($email = "sender@fake.com", $password = "password")
    {
        $client = static::createClient();
        $client->request(
            'POST',
            '/api/login',
            [],
            [],
            [
                'CONTENT_TYPE' => 'application/json'
            ],
            json_encode(
                [
                    "email"=>$email,
                    "password"=>$password
                ]
            )
        );
        $data = json_decode($client->getResponse()->getContent(), true);

        $client = static::createClient();
        $client->setServerParameter('HTTP_Authorization', sprintf('Bearer %s', $data['token']));

        return $client;
    }

    public function testGetSentInvitation(){
        $email = "sender@fake.com";
        $client = $this->createAuthenticatedClient($email);
        $crawler = $client->request(
            'GET',
            '/api/invitation/sent', [],
            [],
            [
                'CONTENT_TYPE' => 'application/json',
            ]);
        $data = json_decode($client->getResponse()->getContent(), true);
        $this->assertSame(200, $client->getResponse()->getStatusCode());
        $this->assertContains($email, $client->getResponse()->getContent());
        $this->assertContains($email, $data[0]['sender']['email']);
    }

    public function testGetReceivedInvitation(){
        $email = "sender@fake.com";
        $client = $this->createAuthenticatedClient($email);
        $crawler = $client->request(
            'GET',
            '/api/invitation/received', [],
            [],
            [
                'CONTENT_TYPE' => 'application/json',
            ]);
        $data = json_decode($client->getResponse()->getContent(), true);
        $this->assertSame(200, $client->getResponse()->getStatusCode());
        $this->assertContains($email, $client->getResponse()->getContent());
        $this->assertContains($email, $data[0]['receiver']['email']);
    }

    public function testCreateInvitation(){
        $email = "sender@fake.com";
        $receiverEmail = "receiver@fake.com";
        $client = $this->createAuthenticatedClient($email);
        $crawler = $client->request(
            'POST',
            '/api/invitation', [],
            [],
            [
                'CONTENT_TYPE' => 'application/json',
            ],
            '{"email":"'.$receiverEmail.'"}');
        $data = json_decode($client->getResponse()->getContent(), true);
        $this->assertSame(201, $client->getResponse()->getStatusCode());
        $this->assertContains($email, $client->getResponse()->getContent());
        $this->assertContains($email, $data['sender']['email']);
        $this->assertContains($receiverEmail, $data['receiver']['email']);
    }
}
